
import { pipeline } from '@huggingface/transformers';

// Initialize text classification pipeline
let classifier: any = null;

export const initializeModel = async () => {
  if (!classifier) {
    try {
      console.log('Attempting to load model...');
      classifier = await pipeline(
        'text-classification', 
        'distilbert-base-uncased-finetuned-sst-2-english'
      );
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Failed to load model:', error);
      // Fallback to a simpler classification method
      classifier = {
        call: async (input: string) => {
          console.warn('Using fallback classification');
          // Simple sentiment classification
          const lowercaseInput = input.toLowerCase();
          if (lowercaseInput.includes('good') || lowercaseInput.includes('great') || lowercaseInput.includes('love')) {
            return [{ label: 'POSITIVE', score: 0.8 }];
          }
          if (lowercaseInput.includes('bad') || lowercaseInput.includes('terrible') || lowercaseInput.includes('hate')) {
            return [{ label: 'NEGATIVE', score: 0.8 }];
          }
          return [{ label: 'NEUTRAL', score: 0.5 }];
        }
      };
    }
  }
  return classifier;
};

export const analyzeInput = async (input: string) => {
  const classifier = await initializeModel();
  const result = await classifier.call(input);
  return result[0].label; // Returns sentiment/context label
};

// Store conversation context
const conversationMemory: string[] = [];
const MEMORY_LIMIT = 5;

export const addToMemory = (message: string) => {
  conversationMemory.push(message);
  if (conversationMemory.length > MEMORY_LIMIT) {
    conversationMemory.shift();
  }
};

export const getConversationContext = () => {
  return conversationMemory.join(' ');
};
