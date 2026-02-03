import React from 'react';
import { Lock, Shield, ShieldCheck } from 'lucide-react';
import { useTranslation } from './useTranslation';

export default function RiskIndicator() {
  const { t } = useTranslation();
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Risk Scale */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border border-[#00008B] rounded-sm p-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-light text-[#00008B]">1/6</span>
            <p className="text-xs text-gray-600 text-center max-w-md mt-1">
              {t('riskIndicatorText')}
            </p>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          
          <p className="text-xs text-gray-600 text-center md:text-left max-w-md">
            {t('depositInsuranceMember')}
            <span className="text-[#00008B] font-medium"> {t('guaranteedAmount')}</span>
          </p>
        </div>

        {/* Security & Fraud Protection Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200 mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 rounded-full p-2">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#00008B]">
              {t('securityFraudProtection')}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{t('fraud100')}</p>
                <p className="text-gray-600">
                  {t('fraudDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{t('realtimeMonitoring')}</p>
                <p className="text-gray-600">
                  {t('monitoringDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{t('secureEncryption')}</p>
                <p className="text-gray-600">
                  {t('encryptionDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{t('instantNotifications')}</p>
                <p className="text-gray-600">
                  {t('notificationsDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{t('depositInsurance100')}</p>
                <p className="text-gray-600">
                  {t('depositInsuranceDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lock Notice */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-600">
          <Lock className="w-4 h-4" />
          <p>{t('lockNotice')}</p>
        </div>
      </div>
    </div>
  );
}