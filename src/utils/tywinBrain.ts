
import { analyzeInput, addToMemory, getConversationContext } from './mlUtils';

interface KeywordResponse {
  keywords: string[];
  response: string;
}

// Tywin's characteristic responses based on topic keywords
const tywinResponses: KeywordResponse[] = [
  {
    keywords: ["family", "lannister", "house", "name", "legacy", "children"],
    response: "The house that puts family first will always prevail over those who prioritize the whims and wishes of their sons and daughters. A lion doesn't concern himself with the opinions of the sheep."
  },
  {
    keywords: ["war", "battle", "fight", "enemy", "armies", "soldiers", "kill", "attack"],
    response: "When your enemies defy you, you must serve them steel and fire. When they go to their knees, however, you must help them back to their feet. Otherwise, no man will ever bend the knee to you."
  },
  {
    keywords: ["money", "gold", "debt", "pay", "cost", "wealth", "rich", "loan"],
    response: "A Lannister always pays his debts. Gold buys a man's silence for a time. Steel buys it forever."
  },
  {
    keywords: ["power", "throne", "rule", "king", "queen", "command", "control", "lead"],
    response: "Any man who must say 'I am the king' is no true king. The king is dead. Long live the king."
  },
  {
    keywords: ["advice", "help", "need", "want", "suggestion", "guidance", "counsel"],
    response: "It's not wise to fish for lessons in every failure. Some lessons must be learned in blood."
  },
  {
    keywords: ["honor", "duty", "oath", "promise", "vow", "respect", "loyal"],
    response: "There is no creature on earth half so terrifying as a truly just man. Let them have their honor. And their graves."
  },
  {
    keywords: ["fear", "scared", "afraid", "terror", "threat", "worry"],
    response: "It's the fear of failure that drives me to stay vigilant when others grow complacent. A lion does not fear the sheep."
  },
  {
    keywords: ["love", "care", "emotion", "feel", "heart", "affection"],
    response: "Love is a poison. A sweet poison, yes, but it will kill you all the same. The only sentiment I value is loyalty to family."
  },
  {
    keywords: ["hello", "hi", "greetings", "welcome", "meet"],
    response: "I see you've sought the counsel of Tywin Lannister. Speak plainly and I may deign to respond."
  },
  {
    keywords: ["thanks", "thank you", "grateful", "appreciate"],
    response: "Your gratitude is noted. Remember this lesson well, for I rarely repeat myself."
  },
  {
    keywords: ["wrong", "problem", "issue", "mistake", "error", "incorrect"],
    response: "There is nothing wrong with me. The question is what is wrong with you to address me in such a manner."
  },
  {
    keywords: ["do", "doing", "action", "task", "work", "activity"],
    response: "I am ruling, as I have always done. My actions are not for you to question, but to learn from."
  }
];

// Default responses when no specific context is matched
const defaultResponses = [
  "A lion doesn't concern himself with the opinions of sheep.",
  "When your enemies defy you, you must serve them steel and fire.",
  "Some lessons must be learned in blood.",
  "The house that puts family first will always prevail.",
  "Any man who must say 'I am the king' is no true king.",
  "Power resides where men believe it resides. It's a trick, a shadow on the wall.",
  "You are neither a warrior nor a politician. Yet here you stand, offering advice.",
  "Explain to me why it is more noble to kill ten thousand men in battle than a dozen at dinner.",
  "I need you to be the man you were always meant to be. Not next year, not tomorrow. Now.",
  "I will not have my legacy tarnished by your foolishness. The future of our house will be determined in these next few months."
];

/**
 * Analyzes user input and returns an appropriate Tywin Lannister response
 */
export const analyzeTywinResponse = async (userInput: string): Promise<string> => {
  // Add to conversation memory
  addToMemory(userInput);
  
  try {
    // Get sentiment/context analysis
    const sentiment = await analyzeInput(userInput);
    
    // Get conversation context
    const context = getConversationContext();
    
    // Match with appropriate response using both ML analysis and keywords
    const input = userInput.toLowerCase();
    
    // First check for keyword matches
    for (const entry of tywinResponses) {
      if (entry.keywords.some(keyword => input.includes(keyword))) {
        return entry.response;
      }
    }
    
    // If no keyword matches, use sentiment-based responses
    switch(sentiment) {
      case 'POSITIVE':
        return "Don't mistake my measured response for approval. A lion doesn't concern himself with praise.";
      case 'NEGATIVE':
        return "Your frustration is apparent, but weakness of emotion serves no purpose. Address the matter with cold calculation.";
      default:
        // Return a random default response to avoid repetition
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
  } catch (error) {
    console.error('Error analyzing input:', error);
    // Fallback to basic keyword matching if ML fails
    return analyzeTywinResponseFallback(userInput);
  }
};

// Fallback function using the original keyword matching
const analyzeTywinResponseFallback = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  for (const entry of tywinResponses) {
    if (entry.keywords.some(keyword => input.includes(keyword))) {
      return entry.response;
    }
  }
  
  // Return a random default response to avoid repetition
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
