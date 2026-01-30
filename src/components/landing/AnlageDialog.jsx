import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function AnlageDialog({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    rufnummer: '',
    waehrung: 'EURC',
    anlagebetrag: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await base44.entities.Anlage.create({
        ...formData,
        anlagebetrag: parseFloat(formData.anlagebetrag)
      });
      toast.success('Ihre Anlage wurde erfolgreich eingereicht!');
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        rufnummer: '',
        waehrung: 'EURC',
        anlagebetrag: ''
      });
      onOpenChange(false);
    } catch (error) {
      toast.error('Fehler beim Senden der Anlage');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#001e50]">Geld anlegen</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="vorname">Vorname *</Label>
            <Input
              id="vorname"
              required
              value={formData.vorname}
              onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="nachname">Nachname *</Label>
            <Input
              id="nachname"
              required
              value={formData.nachname}
              onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="rufnummer">Rufnummer *</Label>
            <Input
              id="rufnummer"
              required
              value={formData.rufnummer}
              onChange={(e) => setFormData({ ...formData, rufnummer: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="waehrung">Währung *</Label>
            <Select
              value={formData.waehrung}
              onValueChange={(value) => setFormData({ ...formData, waehrung: value })}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EURC">EURC</SelectItem>
                <SelectItem value="EURUA">EURUA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="anlagebetrag">Anlagebetrag (€) *</Label>
            <Input
              id="anlagebetrag"
              type="number"
              required
              min="0"
              step="0.01"
              value={formData.anlagebetrag}
              onChange={(e) => setFormData({ ...formData, anlagebetrag: e.target.value })}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#001e50] hover:bg-[#003087] mt-6"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              'Anlage einreichen'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}