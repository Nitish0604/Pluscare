// src/components/HealthApp.js
import React, { useState } from 'react';

const symptomsData = {
  infant: [
    'Fever',
    'Cough',
    'Runny Nose',
    'Diarrhea',
    'Vomiting',
    'Irritability',
    'Loss of Appetite',
    'Swelling at Injection Site',
  ],
  pregnant: ['Nausea', 'Back Pain', 'Fatigue', 'Swelling', 'Headache'],
  oldMan: [
    'Joint Pain',
    'Memory Loss',
    'Insomnia',
    'Heartburn',
    'Constipation',
    'Difficulty Walking',
    'Vision Problems',
    'Needing Assistance for Daily Activities',
  ],
};


const diseasesData = {
  'Fever': {
    suggestion: 'Rest and stay hydrated. If symptoms persist, consult a healthcare professional.',
    foodToEat: ['Clear fluids', 'Broth', 'Fruits'],
    avoid: ['Spicy food', 'Fried food', 'Caffeine'],
    relatedDiseases: ['Flu', 'Common Cold'],
  },
  'Cough': {
    suggestion: 'Drink warm liquids, rest, and use cough drops. Consult a doctor if severe.',
    foodToEat: ['Honey', 'Ginger tea', 'Soup'],
    avoid: ['Cold beverages', 'Dairy products'],
    relatedDiseases: ['Bronchitis', 'Pneumonia'],
  },
  'Diarrhea': {
    suggestion: 'Drink plenty of fluids and follow the BRAT diet (Bananas, Rice, Applesauce, Toast).',
    foodToEat: ['Bananas', 'Rice', 'Applesauce', 'Toast'],
    avoid: ['Fried food', 'Dairy products', 'Spicy food'],
    relatedDiseases: ['Gastroenteritis', 'Food Poisoning'],
  },
  'Vomiting': {
    suggestion: 'Stay hydrated with small sips of clear fluids. If severe, seek medical attention.',
    foodToEat: ['Clear fluids', 'Ice chips'],
    avoid: ['Spicy food', 'Dairy products', 'Solid foods'],
    relatedDiseases: ['Gastroenteritis', 'Food Poisoning'],
  },
  'Irritability': {
    suggestion: 'Ensure proper sleep and comfort. Consult a doctor if persistent.',
    foodToEat: ['Chamomile tea', 'Yogurt', 'Nuts'],
    avoid: ['Caffeine', 'Sugary snacks'],
    relatedDiseases: ['Sleep Disorders', 'Anxiety'],
  },
  'LossOfAppetite': {
    suggestion: 'Eat small, nutrient-dense meals. Consult a doctor if appetite loss continues.',
    foodToEat: ['Protein-rich foods', 'Fruits', 'Vegetables'],
    avoid: ['Processed foods', 'Sugary snacks'],
    relatedDiseases: ['Gastroenteritis', 'Depression'],
  },
  'SwellingAtInjectionSite': {
    suggestion: 'Apply a cold compress and keep the area elevated. If severe, consult a doctor.',
    foodToEat: ['Anti-inflammatory foods', 'Citrus fruits'],
    avoid: ['Alcohol', 'Caffeine'],
    relatedDiseases: ['Vaccine Reaction', 'Allergic Reaction'],
  },
  'Joint Pain': {
    suggestion: 'Rest the affected joint and consider over-the-counter pain relievers.',
    foodToEat: ['Omega-3 rich foods', 'Berries', 'Leafy greens'],
    avoid: ['Highly processed foods', 'Sugary snacks'],
    relatedDiseases: ['Arthritis', 'Osteoarthritis'],
  },
  'Memory Loss': {
    suggestion: 'Engage in mental exercises, maintain a healthy diet, and stay socially active.',
    foodToEat: ['Blueberries', 'Fatty fish', 'Nuts'],
    avoid: ['Excessive alcohol', 'Processed foods'],
    relatedDiseases: ['Alzheimer’s Disease', 'Dementia'],
  },
  'Insomnia': {
    suggestion: 'Establish a regular sleep routine, create a comfortable sleep environment, and limit caffeine.',
    foodToEat: ['Bananas', 'Turkey', 'Chamomile tea'],
    avoid: ['Caffeine', 'Heavy meals before bedtime'],
    relatedDiseases: ['Sleep Disorders', 'Anxiety'],
  },
  'Heartburn': {
    suggestion: 'Avoid large meals, acidic foods, and lying down after eating. Consider antacids.',
    foodToEat: ['Oatmeal', 'Ginger', 'Non-citrus fruits'],
    avoid: ['Spicy food', 'Citrus fruits', 'Tomatoes'],
    relatedDiseases: ['Gastroesophageal Reflux Disease (GERD)', 'Peptic Ulcer'],
  },
  'Constipation': {
    suggestion: 'Increase fiber intake, stay hydrated, and engage in regular physical activity.',
    foodToEat: ['Prunes', 'Whole grains', 'Leafy greens'],
    avoid: ['Processed foods', 'Dairy products'],
    relatedDiseases: ['Irritable Bowel Syndrome (IBS)', 'Colon Cancer'],
  },
  'Difficulty Walking': {
    suggestion: 'Consult a healthcare professional for a thorough evaluation and appropriate interventions.',
    foodToEat: ['Foods rich in calcium and vitamin D', 'Lean proteins', 'Whole grains'],
    avoid: ['Excessive caffeine', 'Highly processed foods'],
    relatedDiseases: ['Arthritis', 'Neurological Disorders'],
  },
  'Vision Problems': {
    suggestion: 'Schedule an eye examination and follow recommendations from an eye care professional.',
    foodToEat: ['Foods rich in vitamin A', 'Leafy greens', 'Fish'],
    avoid: ['Excessive alcohol', 'Sugary snacks'],
    relatedDiseases: ['Cataracts', 'Glaucoma'],
  },
  'Needing Assistance for Daily Activities': {
    suggestion: 'Seek assistance from healthcare professionals and caregivers to maintain quality of life.',
    foodToEat: ['Balanced and nutritious meals'],
    avoid: ['Processed foods', 'Sugary snacks'],
    relatedDiseases: ['Age-related Decline', 'Chronic Illness'],
  },
  'Nausea': {
    suggestion: 'Stay hydrated and eat small, bland meals. If persistent, consult a doctor.',
    foodToEat: ['Crackers', 'Ginger', 'Plain toast'],
    avoid: ['Spicy food', 'Fatty food', 'Strong odors'],
    relatedDiseases: ['Morning Sickness', 'Stomach Flu'],
  },

  'Fatigue': {
    suggestion: 'Ensure good sleep hygiene, stay hydrated, and engage in light exercise.',
    foodToEat: ['Whole grains', 'Lean proteins', 'Fruits'],
    avoid: ['Excessive caffeine', 'Sugary snacks'],
    relatedDiseases: ['Anemia', 'Chronic Fatigue Syndrome'],
  },
  'Swelling': {
    suggestion: 'Elevate the swollen area, apply ice, and consider over-the-counter pain relievers.',
    foodToEat: ['Anti-inflammatory foods', 'Leafy greens'],
    avoid: ['High-sodium foods', 'Processed foods'],
    relatedDiseases: ['Edema', 'Inflammation'],
  },
  'Headache': {
    suggestion: 'Rest in a dark, quiet room, stay hydrated, and consider pain relievers.',
    foodToEat: ['Magnesium-rich foods', 'Hydrating foods'],
    avoid: ['Caffeine', 'Alcohol', 'Processed meats'],
    relatedDiseases: ['Tension Headache', 'Migraine'],
  },
  'Loss of Appetite': {
    suggestion: 'Eat small, nutrient-dense meals. Consult a doctor if appetite loss continues.',
    foodToEat: ['Protein-rich foods', 'Fruits', 'Vegetables'],
    avoid: ['Processed foods', 'Sugary snacks'],
    relatedDiseases: ['Gastroenteritis', 'Depression'],
  },
  'Swelling at Injection Site': {
    suggestion: 'Apply a cold compress and keep the area elevated. If severe, consult a doctor.',
    foodToEat: ['Anti-inflammatory foods', 'Citrus fruits'],
    avoid: ['Alcohol', 'Caffeine'],
    relatedDiseases: ['Vaccine Reaction', 'Allergic Reaction'],
  },
  'Runny Nose': {
    suggestion: 'Stay hydrated and get plenty of rest. Use a humidifier for comfort.',
    foodToEat: ['Chicken soup', 'Hot tea', 'Citrus fruits'],
    avoid: ['Spicy food', 'Dairy products'],
    relatedDiseases: ['Allergies', 'Sinusitis'],
  },
  'Back Pain': {
    suggestion: 'Apply heat or cold packs, rest, and consider over-the-counter pain relievers.',
    foodToEat: ['Anti-inflammatory foods', 'Calcium-rich foods'],
    avoid: ['Highly processed foods', 'Caffeine'],
    relatedDiseases: ['Muscle Strain', 'Sciatica'],
  },
};



const doctorMapping = {
  'Orthopedic Specialist': 'Dr. Smith, Orthopedic Specialist',
  'Neurologist': 'Dr. Johnson, Neurologist',
  'Ophthalmologist': 'Dr. Brown, Ophthalmologist',
  'General Practitioner with specialization': 'Dr. Davis, General Practitioner',
  'Gastroenterologist': 'Dr. Anderson, Gastroenterologist',
  'Allergist/Immunologist': 'Dr. White, Allergist/Immunologist',
  'Rheumatologist': 'Dr. Miller, Rheumatologist',
  'General Healthcare Provider': 'Dr. Johnson, PlusCare Provider', // Default
};

const HealthApp = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedSymptoms([]);
  };

  const handleSymptomSelect = (symptom) => {
    const isSelected = selectedSymptoms.includes(symptom);

    if (isSelected) {
      setSelectedSymptoms(selectedSymptoms.filter((selected) => selected !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const suggestDoctor = (selectedSymptoms) => {
    const relatedDiseases = selectedSymptoms.reduce((acc, symptom) => {
      return [...acc, ...diseasesData[symptom].relatedDiseases];
    }, []);

    const uniqueRelatedDiseases = Array.from(new Set(relatedDiseases));

    const availableDoctors = uniqueRelatedDiseases
      .map(disease => doctorMapping[disease])
      .filter(doctor => doctor);

    if (availableDoctors.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableDoctors.length);
      return availableDoctors[randomIndex];
    }
    return doctorMapping['General Healthcare Provider'];
  };

  const suggestVisitTiming = (selectedSymptoms) => {
    // Logic to determine when the patient should visit a doctor based on symptoms
    if (selectedSymptoms.includes('Swelling at Injection Site') || selectedSymptoms.includes('Memory Loss')
      || selectedSymptoms.includes('Swelling')) {
      return 'Immediately';
    } else if (selectedSymptoms.length >= 3) {
      return 'Within a week';
    } else {
      return 'Within two weeks';
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Check Health Symptoms</h1>
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <button
            onClick={() => handleGroupSelect('infant')}
            className={`bg-pink-500 text-white px-4 py-2 rounded focus:outline-none ${selectedGroup === 'infant' ? 'bg-pink-600' : 'hover:bg-pink-400'
              }`}
          >
            Infant
          </button>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => handleGroupSelect('pregnant')}
            className={`bg-green-500 text-white px-4 py-2 rounded focus:outline-none ${selectedGroup === 'pregnant' ? 'bg-green-600' : 'hover:bg-green-400'
              }`}
          >
            Pregnant Lady
          </button>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => handleGroupSelect('oldMan')}
            className={`bg-blue text-white px-4 py-2 rounded focus:outline-none ${selectedGroup === 'oldMan' ? 'bg-blue' : 'hover:bg-midBlue'
              }`}
          >
            Old Man
          </button>
        </div>
      </div>
      {selectedGroup && (
        <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold mb-2">Select Symptoms</h2>
          <ul className="space-y-2">
            {symptomsData[selectedGroup].map((symptom) => (
              <li
                key={symptom}
                className={`flex items-center cursor-pointer p-2 rounded ${selectedSymptoms.includes(symptom) ? ' opacity-80' : 'hover:text-red-500 hover:font-bold'
                  }`}
                onClick={() => handleSymptomSelect(symptom)}
              >
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleSymptomSelect(symptom)}
                  className="mr-2"
                />
                <label>{symptom}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSymptoms.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Disease Suggestions</h2>
          <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <h3 className="text-lg font-bold mb-2">Combined Suggestion</h3>
            <p>{suggestDoctor(selectedSymptoms)}</p>
            <p className="text-sm text-gray-500 mt-2">
              Visit Timing: {suggestVisitTiming(selectedSymptoms)}
            </p>
          </div>
          {selectedSymptoms.map((selectedSymptom) => (
            <div key={selectedSymptom} className="bg-white rounded-lg p-4 mb-4 shadow-md">
              <h3 className="text-lg font-bold mb-2">{selectedSymptom}</h3>
              <p>{diseasesData[selectedSymptom].suggestion}</p>
              <h4 className="text-lg font-bold mt-2 mb-1">Food to Eat</h4>
              <ul className="list-disc list-inside">
                {diseasesData[selectedSymptom].foodToEat.map((food) => (
                  <li key={food}>{food}</li>
                ))}
              </ul>
              <h4 className="text-lg font-bold mt-2 mb-1">Avoid</h4>
              <ul className="list-disc list-inside">
                {diseasesData[selectedSymptom].avoid.map((avoidItem) => (
                  <li key={avoidItem}>{avoidItem}</li>
                ))}
              </ul>
              <h4 className="text-lg font-bold mt-2 mb-1">Related Diseases</h4>
              <ul className="list-disc list-inside">
                {diseasesData[selectedSymptom].relatedDiseases.map((relatedDisease) => (
                  <li key={relatedDisease}>{relatedDisease}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HealthApp;