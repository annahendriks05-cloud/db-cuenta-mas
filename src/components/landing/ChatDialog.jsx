import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from './useTranslation';

export default function ChatDialog({ open, onOpenChange }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    observacion: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await base44.entities.ChatSolicitud.create({
        nombre: formData.nombre,
        telefono: formData.telefono,
        email: formData.email,
        observacion: formData.observacion,
        estado: 'pendiente'
      });

      setSubmitted(true);
      toast.success('Solicitud enviada correctamente');
    } catch (error) {
      toast.error('Error al enviar la solicitud');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ nombre: '', telefono: '', email: '', observacion: '' });
    setSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#00008B] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-xl text-[#00008B]">{t('chatTitle')}</DialogTitle>
                  <DialogDescription>
                    {t('chatDescription')}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('chatName')} <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder={t('chatNamePlaceholder')}
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('chatPhone')}
                </label>
                <Input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  placeholder={t('chatPhonePlaceholder')}
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('chatEmail')} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('chatEmailPlaceholder')}
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('chatObservation')}
                </label>
                <Textarea
                  value={formData.observacion}
                  onChange={(e) => setFormData({ ...formData, observacion: e.target.value })}
                  placeholder={t('chatObservationPlaceholder')}
                  className="border-gray-300 h-24"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white"
              >
                {loading ? t('chatSubmitting') : t('chatSubmit')}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl text-[#00008B] mb-3">
              {t('chatSuccessTitle')}
            </DialogTitle>
            <DialogDescription className="text-base mb-6">
              {t('chatSuccessMessage')}
            </DialogDescription>
            <Button
              onClick={handleClose}
              className="bg-[#00008B] hover:bg-[#0000CD] text-white"
            >
              {t('chatClose')}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}