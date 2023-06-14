import React from 'react';
import './home.css';

const crossFitData = {
  title: 'CrossFit Training',
  about_training:
    'CrossFit is a high-intensity fitness program that combines weightlifting, cardiovascular exercise, and bodyweight movements. It aims to improve overall physical fitness through constantly varied workouts that challenge strength, endurance, flexibility, and more. It emphasizes' +
    ' functional movements and often includes group workouts with a sense of community and competition.',
  description:
    'CrossFit is a high-intensity fitness training program that combines elements of weightlifting, cardiovascular exercise, and bodyweight movements. It aims to improve overall physical fitness, including strength, endurance, flexibility, and agility.',
  circles: [
    'Cardiovascular Conditioning',
    'Strength Training',
    'Gymnastics',
    'Functional Movements',
  ],
  recommended_time: '60 minutes',
};

const functionalData = {
  title: 'Functional Training',
  about_training:
    'Functional training is a type of exercise that focuses on movements that are essential for everyday activities. It aims to improve overall fitness by engaging multiple muscle groups and joints simultaneously. This type of training enhances strength, stability, balance, flexibility, and coordination.' +
    ' It uses functional movements and can be tailored to individual needs and goals. Functional training is beneficial for people of all fitness levels and can help improve overall physical performance and reduce the risk of injuries in daily life activities.',
  description:
    'Bench press 3 sets of 8-10 reps. Dumbbell wiring to the side on a bench.',
};

export const Home = () => {
  return (
    <div className="wrapper_home">
      <a href="/crossfit" className="left_content">
        <h2>{crossFitData.title}</h2>
        <p className="left_content_description">
          {crossFitData.about_training}
        </p>
      </a>
      <a href="/functional" className="right_content">
        <h2>{functionalData.title}</h2>
        <p className="right_content_description">
          {functionalData.about_training}
        </p>
      </a>
    </div>
  );
};
