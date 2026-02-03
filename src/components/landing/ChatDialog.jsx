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

export default function ChatDialog({ open, onOpenChange }) {
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
                  <DialogTitle className="text-xl text-[#00008B]">Chat starten</DialogTitle>
                  <DialogDescription>
                    Por favor, complete sus datos
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Su nombre completo"
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  placeholder="+49..."
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="su.email@ejemplo.com"
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observación
                </label>
                <Textarea
                  value={formData.observacion}
                  onChange={(e) => setFormData({ ...formData, observacion: e.target.value })}
                  placeholder="¿En qué podemos ayudarle?"
                  className="border-gray-300 h-24"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white"
              >
                {loading ? 'Enviando...' : 'Enviar solicitud'}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl text-[#00008B] mb-3">
              Solicitud recibida
            </DialogTitle>
            <DialogDescription className="text-base mb-6">
              De momento nuestros agentes están ocupados. Hemos pasado su solicitud a un agente
              y se pondrá en contacto con usted lo más rápido posible.
            </DialogDescription>
            <Button
              onClick={handleClose}
              className="bg-[#00008B] hover:bg-[#0000CD] text-white"
            >
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}