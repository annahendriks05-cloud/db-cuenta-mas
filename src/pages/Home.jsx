import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Filialen from './Filialen';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(createPageUrl('Filialen'));
  }, [navigate]);

  return <Filialen />;
}