import React from 'react';
import { Package, Question, QuestionType } from './types';

// The specific booking URLs are defined below for each package.

export const PACKAGES: Package[] = [
  // 1. Bikepacking
  {
    id: 'mv_challenge',
    title: 'Montañas Vacias Challenge',
    description: 'The ultimate gravel and bikepacking adventure. Tackle the Empty Mountains with this 5-day challenge.',
    features: ['5 Days', 'Gravel/Bikepacking', 'Self-Guided', 'Adventure Focused'],
    imageUrl: 'https://picsum.photos/id/191/800/600',
    matchTags: ['bikepacking', 'gravel', '5_days'],
    recommendedFor: 'Adventure seekers wanting a true off-road challenge.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/monta%C3%B1as-vacias-challenge-5-days?utm_medium=page_links&referral=service_list_widget'
  },
  
  // 2. 3 Day Self Guided
  {
    id: '3d_sg_fb',
    title: '3 Day Self-Guided (Full Board)',
    description: 'A perfect short escape. Navigate at your own pace with all meals prepared for you.',
    features: ['3 Days Riding', 'Self-Guided', 'Full Board Meals', 'Road/Gravel/MTB'],
    imageUrl: 'https://picsum.photos/id/73/800/600',
    matchTags: ['3_days', 'unguided', 'full_board'],
    recommendedFor: 'Independent riders wanting a hassle-free short break.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-self-guided-cycling-full-board?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '3d_sg_hb',
    title: '3 Day Self-Guided (Half Board)',
    description: 'Enjoy 3 days of independent riding with breakfast and dinner included.',
    features: ['3 Days Riding', 'Self-Guided', 'Half Board', 'Road/Gravel/MTB'],
    imageUrl: 'https://picsum.photos/id/73/800/600',
    matchTags: ['3_days', 'unguided', 'half_board'],
    recommendedFor: 'Independent riders who want flexible lunch options.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-self-guided-cycling-half-board?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '3d_sg_sc',
    title: '3 Day Self-Guided (Self Catered)',
    description: 'Ride on your terms and cook on your terms. The most flexible 3-day option.',
    features: ['3 Days Riding', 'Self-Guided', 'Self Catered', 'Road/Gravel/MTB'],
    imageUrl: 'https://picsum.photos/id/73/800/600',
    matchTags: ['3_days', 'unguided', 'self_catered'],
    recommendedFor: 'Budget-conscious or culinary independent riders.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-self-guided-cycling-self-catered?utm_medium=page_links&referral=service_list_widget'
  },

  // 3. 5 Day Self Guided
  {
    id: '5d_sg_fb',
    title: '5 Day Self-Guided (Full Board)',
    description: 'Immerse yourself for 5 days. We handle all the logistics and meals; you just ride.',
    features: ['5 Days Riding', 'Self-Guided', 'Full Board Meals', 'Road/Gravel/MTB'],
    imageUrl: 'https://picsum.photos/id/146/800/600',
    matchTags: ['5_days', 'unguided', 'full_board'],
    recommendedFor: 'Riders wanting a full week of freedom and comfort.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/5-day-self-guided-cycling-full-board?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '5d_sg_sc',
    title: '5 Day Self-Guided (Self Catered)',
    description: 'A 5-day journey where you control the schedule and the menu.',
    features: ['5 Days Riding', 'Self-Guided', 'Self Catered', 'Road/Gravel/MTB'],
    imageUrl: 'https://picsum.photos/id/146/800/600',
    matchTags: ['5_days', 'unguided', 'self_catered'],
    recommendedFor: 'Independent groups wanting a longer stay.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/5-day-self-guided-cycling-self-catered?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '5d_sg_hb',
    title: '5 Day Self-Guided (Half Board)',
    description: '5 days of riding with breakfast and dinner sorted. Lunch is up to you on the road.',
    features: ['5 Days Riding', 'Self-Guided', 'Half Board', 'Road/Gravel/MTB'],
    imageUrl: 'https://picsum.photos/id/146/800/600',
    matchTags: ['5_days', 'unguided', 'half_board'],
    recommendedFor: 'Riders who want support but lunch flexibility.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/5-day-self-guided-cycling-half-board?utm_medium=page_links&referral=service_list_widget'
  },

  // 4. 3 Day Assisted (Guided)
  {
    id: '3d_ac_fb',
    title: '3 Day Assisted Cycling (Full Board)',
    description: 'Professional support and guidance for 3 days, with every meal taken care of.',
    features: ['3 Days Riding', 'Assisted/Guided', 'Full Board', 'Premium Support'],
    imageUrl: 'https://picsum.photos/id/296/800/600',
    matchTags: ['3_days', 'guided', 'full_board'],
    recommendedFor: 'Those wanting expert local knowledge and total relaxation.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-assisted-cycling-full-board?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '3d_ac_hb',
    title: '3 Day Assisted Cycling (Half Board)',
    description: 'Guided rides for 3 days with breakfast and dinner included.',
    features: ['3 Days Riding', 'Assisted/Guided', 'Half Board', 'Premium Support'],
    imageUrl: 'https://picsum.photos/id/296/800/600',
    matchTags: ['3_days', 'guided', 'half_board'],
    recommendedFor: 'Riders wanting a guide but flexible lunches.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-assisted-cycling-half-board?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '3d_ac_sc',
    title: '3 Day Assisted Cycling (Self Catered)',
    description: 'Get the benefit of a guide on the road, but cook for yourself at home.',
    features: ['3 Days Riding', 'Assisted/Guided', 'Self Catered', 'Premium Support'],
    imageUrl: 'https://picsum.photos/id/296/800/600',
    matchTags: ['3_days', 'guided', 'self_catered'],
    recommendedFor: 'Riders who want route expertise but food independence.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-assisted-cycling-self-catered?utm_medium=page_links&referral=service_list_widget'
  },

  // 5. 5 Day Assisted (Guided)
  {
    id: '5d_ac_fb',
    title: '5 Day Assisted Cycling (Full Board)',
    description: 'The complete package. 5 days of guided riding with full board hospitality.',
    features: ['5 Days Riding', 'Assisted/Guided', 'Full Board', 'Premium Support'],
    imageUrl: 'https://picsum.photos/id/431/800/600',
    matchTags: ['5_days', 'guided', 'full_board'],
    recommendedFor: 'Those seeking a fully curated week of cycling.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/5-day-assisted-cycling-full-board?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '5d_ac_hb',
    title: '5 Day Assisted Cycling (Half Board)',
    description: '5 days of guided adventure with breakfast and dinner provided.',
    features: ['5 Days Riding', 'Assisted/Guided', 'Half Board', 'Premium Support'],
    imageUrl: 'https://picsum.photos/id/431/800/600',
    matchTags: ['5_days', 'guided', 'half_board'],
    recommendedFor: 'Riders wanting a guided week with some meal flexibility.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/5-day-assisted-cycling-half-board?utm_medium=page_links&referral=service_list_widget'
  },

  // 6. Pedal and Pause (Culture/Wine)
  {
    id: '3d_pp',
    title: '3 Day Pedal & Pause',
    description: 'A delightful mix of cycling, wine tasting, and cultural discovery.',
    features: ['3 Days', 'Wine Tasting', 'Cultural Stops', 'Relaxed Pace'],
    imageUrl: 'https://images.unsplash.com/photo-1596561175658-06788f400783?auto=format&fit=crop&q=80&w=800', // Wine and bike themed
    matchTags: ['culture', '3_days'],
    recommendedFor: 'Cyclists who enjoy wine and culture as much as riding.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-pedal-and-pause?utm_medium=page_links&referral=service_list_widget'
  },
  {
    id: '3d_pp_sc',
    title: '3 Day Pedal & Pause (Self Catered)',
    description: 'Experience our culture and wine tour with the flexibility of self-catering.',
    features: ['3 Days', 'Wine Tasting', 'Self Catered', 'Cultural Stops'],
    imageUrl: 'https://images.unsplash.com/photo-1596561175658-06788f400783?auto=format&fit=crop&q=80&w=800', // Wine and bike themed
    matchTags: ['culture', '3_days', 'self_catered'],
    recommendedFor: 'Culture lovers who prefer to manage their own meals.',
    bookingUrl: 'https://www.pedalandpause.com/booking-calendar/3-day-pedal-and-pause-self-catered?utm_medium=page_links&referral=service_list_widget'
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 'sport_type',
    text: 'What type of bike do you prefer?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'road', label: 'Road Bike' },
      { id: 'gravel', label: 'Gravel Bike' },
      { id: 'mtb', label: 'Mountain Bike' },
    ],
    helperText: 'Select your primary discipline.'
  },
  {
    id: 'duration',
    text: 'How long would you like to stay?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: '3_days', label: '3 Days' },
      { id: '5_days', label: '5 Days' },
      { id: 'custom', label: 'Custom / Other' },
    ]
  },
  {
    id: 'guide_type',
    text: 'Do you prefer a guide?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'guided', label: 'Guided (Assisted Cycling)' },
      { id: 'unguided', label: 'Un-guided (Self Guided)' },
    ]
  },
  {
    id: 'meal_preference',
    text: 'What is your preferred meal plan?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'self_catered', label: 'Self Catered (I cook my own)' },
      { id: 'half_board', label: 'Half Board (Breakfast & Dinner)' },
      { id: 'full_board', label: 'Full Board (All meals included)' },
    ]
  },
  {
    id: 'level',
    text: 'How would you describe your cycling level?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'beginner', label: 'Leisure (Under 50km/week)' },
      { id: 'intermediate', label: 'Intermediate (50-100km/week)' },
      { id: 'advanced', label: 'Advanced (100km+/week)' },
    ]
  },
  {
    id: 'climbing',
    text: 'What is your appetite for climbing?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'flat', label: 'Flat / Rolling (Up to 500m)' },
      { id: 'hilly', label: 'Climber (500m - 1000m)' },
      { id: 'mountain', label: 'Mountain Goat (1000m+)' },
    ]
  },
  {
    id: 'bikepacking',
    text: 'Would you like to complete a Bike Packing Challenge?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'yes_bikepacking', label: 'Yes, I love adventure!' },
      { id: 'no_bikepacking', label: 'No, prefer standard routes.' },
    ],
    helperText: 'This involves carrying your own gear on multi-day adventure rides.'
  },
  {
    id: 'culture',
    text: 'Are you interested in wine tasting & cultural activities?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'yes_culture', label: 'Yes, absolutely!' },
      { id: 'no_culture', label: 'No, just riding.' },
    ]
  },
  {
    id: 'bike_rental',
    text: 'Do you need to rent a bike?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'yes_standard', label: 'Yes, Standard Carbon' },
      { id: 'yes_premium', label: 'Yes, Premium Upgrade' },
      { id: 'no_own_bike', label: 'No, bringing my own' },
    ]
  },
  {
    id: 'group_size',
    text: 'Who is coming with you?',
    type: QuestionType.SINGLE_CHOICE,
    options: [
      { id: 'solo', label: 'Just me (Solo Cyclist)' },
      { id: 'double', label: 'Me + Partner (Both Cycling)' },
      { id: 'partner_non_cycling', label: 'Me + Partner (Non-cycling)' },
      { id: 'group', label: 'A Group (3+ People)' },
    ]
  },
  // Final Question for Lead Gen
  {
    id: 'email',
    text: 'Where should we send your results?',
    type: QuestionType.INPUT,
    helperText: 'Enter your email to reveal your perfect package and save your preferences.',
    placeholder: 'name@example.com'
  }
];