import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { MessageCircle, Send, X } from 'lucide-react';
import { useTranslation } from './useTranslation';

export default function ChatDialog({ open, onOpenChange }) {
  const { t } = useTranslation();
  const [step, setStep] = useState('form'); // form, chat, completed
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    observacion: ''
  });
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && step === 'form') {
      setMessages([
        {
          type: 'system',
          text: t('chatWelcome'),
          timestamp: new Date()
        }
      ]);
    }
  }, [open, step, t]);

  const addSystemMessage = (text, delay = 0) => {
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'system',
        text,
        timestamp: new Date()
      }]);
    }, delay);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add user message with form data
    const userMessage = `${t('chatName')}: ${formData.nombre}\n${t('chatEmail')}: ${formData.email}${formData.telefono ? `\n${t('chatPhone')}: ${formData.telefono}` : ''}${formData.observacion ? `\n${t('chatObservation')}: ${formData.observacion}` : ''}`;
    
    setMessages(prev => [...prev, {
      type: 'user',
      text: userMessage,
      timestamp: new Date()
    }]);

    setStep('chat');

    // Save to database
    try {
      await base44.entities.ChatSolicitud.create({
        nombre: formData.nombre,
        telefono: formData.telefono,
        email: formData.email,
        observacion: formData.observacion,
        estado: 'pendiente'
      });

      // Simulate system messages
      addSystemMessage(t('chatAssigning'), 1500);
      addSystemMessage(t('chatTransferring'), 4000);
      
    } catch (error) {
      toast.error('Error al enviar la solicitud');
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, {
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    }]);

    setInputMessage('');
  };

  const handleClose = () => {
    setFormData({ nombre: '', telefono: '', email: '', observacion: '' });
    setMessages([]);
    setStep('form');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg h-[600px] flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b bg-[#00008B] text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-lg text-white">{t('chatTitle')}</DialogTitle>
                <p className="text-xs text-white/80">Deutsche Bank</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.type === 'user'
                    ? 'bg-[#00008B] text-white'
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                  {msg.timestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 border-t bg-white space-y-3">
            <Input
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder={t('chatNamePlaceholder')}
              className="border-gray-300"
            />
            <Input
              type="tel"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              placeholder={t('chatPhonePlaceholder')}
              className="border-gray-300"
            />
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t('chatEmailPlaceholder')}
              className="border-gray-300"
            />
            <Textarea
              value={formData.observacion}
              onChange={(e) => setFormData({ ...formData, observacion: e.target.value })}
              placeholder={t('chatObservationPlaceholder')}
              className="border-gray-300 h-20"
            />
            <Button
              type="submit"
              className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white"
            >
              {t('chatSubmit')}
            </Button>
          </form>
        ) : (
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('typingMessage')}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-[#00008B] hover:bg-[#0000CD]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}