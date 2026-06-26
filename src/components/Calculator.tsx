"use client";
import { useState } from 'react';

export default function Calculator() {
  const [industry, setIndustry] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState<null | string>(null);

  const handleCalculate = () => {
    let amount = "0 Ft";
    if (industry === 'manufacturing') amount = "50 - 500 millió Ft";
    if (industry === 'logistics') amount = "30 - 300 millió Ft";
    if (industry === 'services') amount = "10 - 100 millió Ft";
    if (industry === 'agri') amount = "20 - 200 millió Ft";

    setEstimatedAmount(amount);
  };

  return (
    <div className="calculator-card">
      <h3>Pályázati Kalkulátor</h3>
      <p>Válassza ki iparágát a becsült támogatási összeg megtekintéséhez.</p>

      <div className="form-group">
        <label>Iparág</label>
        <select
          value={industry}
          onChange={(e) => {
            setIndustry(e.target.value);
            setEstimatedAmount(null);
          }}
          className="select-input"
        >
          <option value="">-- Válassz --</option>
          <option value="manufacturing">Gyártás & Termelés</option>
          <option value="logistics">Logisztika & Szállítmányozás</option>
          <option value="agri">Mezőgazdaság</option>
          <option value="services">Szolgáltatás & IT</option>
        </select>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!industry}
        className="btn btn-block"
      >
        Kalkuláció
      </button>

      {estimatedAmount && (
        <div className="result-box">
          <h4>Becsült Támogatás:</h4>
          <div className="amount">{estimatedAmount}</div>
          <p className="note">*Az összeg tájékoztató jellegű.</p>
        </div>
      )}

      <style jsx>{`
        .calculator-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        h3 {
          margin-bottom: 1rem;
          color: var(--accent);
        }
        p {
          opacity: 0.8;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .select-input {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: #fff;
          font-size: 1rem;
        }
        .btn-block {
          width: 100%;
          margin-bottom: 2rem;
        }
        .result-box {
          background: rgba(26, 188, 156, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid var(--accent);
          animation: fadeIn 0.5s ease;
        }
        .amount {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin: 0.5rem 0;
        }
        .note {
          font-size: 0.8rem;
          opacity: 0.6;
          margin: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
