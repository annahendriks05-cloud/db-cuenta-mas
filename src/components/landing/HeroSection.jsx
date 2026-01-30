import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    telefono: '',
    email: '',
    codigoPostal: '',
    autorizo: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#001e50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#001e50]" fill="currentColor">
                  <path d="M2 4h20v2H2V4zm0 7h20v2H2v-2zm0 7h20v2H2v-2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold">Deutsche Bank</p>
                <p className="text-sm opacity-80">España</p>
              </div>
            </div>

            <p className="text-sm opacity-80 mb-2">Cuenta Más DB</p>
            <h1 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Aquí su dinero vale MÁS
            </h1>

            {/* Promotion Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#002654] rounded-lg p-8 inline-block"
            >
              <p className="text-white/80 text-lg mb-2">Llévese hasta</p>
              <p className="text-[#ffd000] text-6xl md:text-7xl font-light mb-2">2.740€</p>
              <p className="text-white text-lg">con su Cuenta MÁS DB</p>
            </motion.div>

            <p className="mt-8 text-white/80 text-sm">
              Elija como abrir su Cuenta Más DB, a través de un Gestor o directamente online en{' '}
              <span className="text-white underline cursor-pointer hover:text-[#ffd000] transition-colors">
                DB App
              </span>
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-[#001e50] mb-2">
              ¿Quiere contratar la Cuenta Más DB?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Rellene este formulario y nos pondremos en contacto con usted, sin compromiso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nombre" className="text-sm text-gray-700">
                  Nombre <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nombre"
                  placeholder="Introduzca su nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="apellidos" className="text-sm text-gray-700">
                  Apellidos <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="apellidos"
                  placeholder="Introduzca sus apellidos"
                  value={formData.apellidos}
                  onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="dni" className="text-sm text-gray-700">
                  DNI <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dni"
                  placeholder="Ejemplo: 12345678X"
                  value={formData.dni}
                  onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="telefono" className="text-sm text-gray-700">
                  Teléfono <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2 mt-1">
                  <Select defaultValue="es">
                    <SelectTrigger className="w-24 border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="es">🇪🇸 +34</SelectItem>
                      <SelectItem value="fr">🇫🇷 +33</SelectItem>
                      <SelectItem value="de">🇩🇪 +49</SelectItem>
                      <SelectItem value="uk">🇬🇧 +44</SelectItem>
                      <SelectItem value="us">🇺🇸 +1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="telefono"
                    placeholder="612 34 56 78"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="flex-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm text-gray-700">
                  Correo electrónico <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ejemplo: correo@dominio.ue"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="codigoPostal" className="text-sm text-gray-700">
                  Código postal <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="codigoPostal"
                  placeholder="Ejemplo: 08001"
                  value={formData.codigoPostal}
                  onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="autorizo"
                  checked={formData.autorizo}
                  onCheckedChange={(checked) => setFormData({ ...formData, autorizo: checked })}
                  className="mt-1 border-gray-300 data-[state=checked]:bg-[#001e50]"
                />
                <Label htmlFor="autorizo" className="text-xs text-gray-600 leading-relaxed">
                  AUTORIZO la recogida y tratamiento de mis datos para gestionar mi solicitud y recibir información comercial tal como recoge la{' '}
                  <span className="text-[#001e50] underline cursor-pointer hover:text-[#003087]">
                    Política de Protección de Datos
                  </span>.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#001e50] hover:bg-[#003087] text-white py-6 text-base font-medium transition-all duration-300 mt-4"
              >
                ENVIAR FORMULARIO
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}