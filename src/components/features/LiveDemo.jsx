import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Square, Volume2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Button from '../../components/ui/Button';
import { decode, decodeAudioData, createBlob } from './AudioUtils';

const API_KEY = "YOUR_API_KEY"; // Buraya kendi key'ini koymalısın

const LiveDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([]);
  const audioContextRef = useRef(null);
  const streamRef = useRef(null);

  // Ses ayarları ve Google AI bağlantı mantığı buraya gelecek
  // TypeScript'teki karmaşık tip tanımlarını temizleyerek düz JS'e çevirdik

  const toggleListen = async () => {
    if (isListening) {
      // Durdurma mantığı
      setIsListening(false);
      streamRef.current?.getTracks().forEach(track => track.stop());
    } else {
      // Başlatma mantığı
      setIsListening(true);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        // AI Connection Logic...
      } catch (err) {
        console.error("Microphone access denied", err);
        setIsListening(false);
      }
    }
  };

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 bg-slate-900 text-white flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold italic uppercase tracking-tight">AI Voice Agent</h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Live Technical Demo</p>
            </div>
            <div className={`h-3 w-3 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}></div>
          </div>

          <div className="h-[400px] overflow-y-auto p-8 space-y-6 bg-slate-50/50">
            {messages.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-indigo-600" />
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Awaiting voice input...</p>
              </div>
            )}
            {/* Mesaj listesi map edilecek */}
          </div>

          <div className="p-8 bg-white">
            <div className="flex justify-center">
              <button
                onClick={toggleListen}
                className={`group relative flex items-center justify-center w-20 h-20 rounded-full transition-all duration-500 ${
                  isListening ? 'bg-red-500 shadow-red-200' : 'bg-indigo-600 shadow-indigo-200'
                } shadow-2xl hover:scale-105 active:scale-95`}
              >
                {isListening ? <Square className="text-white fill-white" /> : <Mic className="text-white h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;