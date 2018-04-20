import { Injectable } from '@angular/core';
import {QuestionBase, RadioQuestion} from '../../model/questionBase';
import { DropdownQuestion } from '../../model/questionBase';
import { TextboxQuestion } from '../../model/questionBase';

@Injectable()
export class QuestionService {
  getHealthq() {
    let question: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q1',
        label: '1. How would you rate your overall health on a scale of 1(very poor health) - 4(excellent health)?',
        options: [
          {key: 1, value: 'Poor Health'},
          {key: 2, value: 'Fair Health'},
          {key: 3, value: 'Good Health'},
          {key: 4, value: 'Excellent Health'},
        ],
        order: 1,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q2',
        label: '2. To what extent do you feel that physical pain prevents you from what you need to do?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 2,
        domain: 'physical',
        subdomain: 'health',
      }),
      new RadioQuestion({
        key: 'q3',
        label: '3. Do you have enough energy for everyday activities?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 3,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q4',
        label: '4. Do you take prescribed medications? (If no, skip the next question)',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 4,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q5',
        label: '5. Are there times when you do not take your prescribed meds when you are supposed to? (due to cost, access, etc.)?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 5,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q6',
        label: '6. Do you feel rested upon awaking? ',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 6,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q7',
        label: '7. Is your sleep interrupted?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 7,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q8',
        label: '8. Do you have nightmares?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 8,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q9',
        label: '9. In the last month, how often have you felt stressed?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 9,
        domain: 'physical',
        subdomain: 'health'
      })
    ];
    return question.sort((a, b) => a.order - b.order);
  }

  getMobilityq() {
    let question: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q10',
        label: '10. Do you have difficulty performing daily tasks?  (For example, cooking, bathing, getting dressed?)',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 10,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q11',
        label: '11. Have you found that you are doing tasks less frequently?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 11,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q12',
        label: '12. Have you found that you are doing tasks in a different way than you used to do them?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 12,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q13',
        label: '13. How satisfied are you with your ability to ambulate or move around?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 13,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q14',
        label: '14. Are you able to run errands and shop without assistance?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A Moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'},
        ],
        order: 14,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q15',
        label: '15. How many times a week do you exercise moderately? ',
        description: 'Example from the American Heart Association include:' +
        'Walking briskly(3 miles per hour or faster, but not race-walking), Water aerobic, Bicycling slower than 10 miled per hour,' +
        'Tennis(doubles), Ballroom dancing, General gardening',
        options: [
          {key: 1, value: '0'},
          {key: 2, value: '1 - 3 times'},
          {key: 3, value: '4 - 5 times'},
          {key: 4, value: '6 or more'},
        ],
        order: 15,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q16',
        label: '16. How many times a week do you exercise vigorously? ',
        description: 'Example from the American Heart Association include:' +
        'Walking briskly(3 miles per hour or faster, but not race-walking), Water aerobic, Bicycling slower than 10 miled per hour,' +
        'Tennis(doubles), Ballroom dancing, General gardening',
        options: [
          {key: 1, value: '0'},
          {key: 2, value: '1 - 3 times'},
          {key: 3, value: '4 - 5 times'},
          {key: 4, value: '6 or more'},
        ],
        order: 16,
        domain: 'physical',
        subdomain: 'mobility'
      })
    ];
    return question.sort((a, b) => a.order - b.order);
  }

  getDrugq() {
    let physicalQuestion: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q17',
        label: '17. Do you smoke cigarettes? (If no, skip the next question)',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 17,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q18',
        label: '18. If you do smoke, how many cigarettes do you smoke in one day?',
        options: [
          {key: 1, value: '0 - 5 cigs'},
          {key: 2, value: '6 - 10 cigs'},
          {key: 3, value: '11 - 19 cigs'},
          {key: 4, value: '>20 vigs'},
        ],
        order: 18,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q19',
        label: '19. Do you currently use chewing tobacco, (snuff)?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'Sometimes'},
          {key: 3, value: 'Everyday'},
          {key: 4, value: 'Refused'}
        ],
        order: 19,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q20',
        label: '20. Do you drink alcohol (If no, skip the next two questions)?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'Sometimes'},
          {key: 3, value: 'Everyday'},
          {key: 4, value: 'Refused'}
        ],
        order: 20,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q21',
        label: '21. How many drinks do you have in a week?',
        options: [
          {key: 1, value: '0 - 5 drinks'},
          {key: 2, value: '6 - 10 drinks'},
          {key: 3, value: '11 - 19 drinks'},
          {key: 4, value: '> 20 drinks'},
        ],
        order: 21,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q22',
        label: '22. How many drinks do you have at one time?',
        options: [
          {key: 1, value: '1 - 2 drinks'},
          {key: 2, value: '3 - 4 drinks'},
          {key: 3, value: '5 - 6 drinks'},
          {key: 4, value: '> 6 drinks'},
        ],
        order: 22,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q23',
        label: '23. Do you smoke marijuana? (If no, skip the next question)',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'Sometimes'},
          {key: 3, value: 'Everyday'},
          {key: 4, value: 'Refused'}
        ],
        order: 23,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q24',
        label: '24. How many times in a week do you smoke marijuana? ',
        options: [
          {key: 1, value: '0 - 5 times'},
          {key: 2, value: '6 - 10 times'},
          {key: 3, value: '11 - 19 times'},
          {key: 4, value: '> 20 times'}
        ],
        order: 24,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q25',
        label: '25. Do you use any other recreational drugs (including drugs prescribed for other people)?   (If no, skip the next question)?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'Sometimes'},
          {key: 3, value: 'Everyday'},
          {key: 4, value: 'Refused'}
        ],
        order: 25,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q26',
        label: '26. How often do you use/take the drug(s)in a week? ',
        options: [
          {key: 1, value: '0 - 5 times'},
          {key: 2, value: '6 - 10 times'},
          {key: 3, value: '11 - 19 times'},
          {key: 4, value: '> 20 times'}
        ],
        order: 26,
        domain: 'physical',
        subdomain: 'drug'
      })
      //subdomain 3 food
    ];
    return physicalQuestion.sort((a, b) => a.order - b.order);
  }

  getFoodq() {
    let questions: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q27',
        label: '27. How many meals a day do you eat?',
        options: [
          {key: 1, value: '0 - 1'},
          {key: 2, value: '2 - 3'},
          {key: 3, value: '4 - 5'},
          {key: 4, value: '6 or greater'}
        ],
        order: 27,
        domain: 'physical',
        subdomain: 'food'
      }),
      new RadioQuestion({
        key: 'q28',
        label: '28. How many glasses of water do you drink per day?',
        options: [
          {key: 1, value: '0 - 1'},
          {key: 2, value: '2 - 3'},
          {key: 3, value: '4 - 5'},
          {key: 4, value: '6 or greater'}
        ],
        order: 28,
        domain: 'physical',
        subdomain: 'food'
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

  getReaction() {
    let questions: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q29',
        label: '1. How much do you enjoy life?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 29,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q30',
        label: '2. How much confidence do you have in yourself?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 30,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q31',
        label: '3. How satisfied are you with the quality of your life?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 31,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q32',
        label: '4. How optimistic are you in your life?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 32,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q33',
        label: '5. How often do you have negative feelings?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 33,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q34',
        label: '6. How much do feelings of sadness or depression interfere with your everyday functioning?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 34,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q35',
        label: '7. Do you have trouble trusting other people?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 35,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q36',
        label: '8. Do you have the ability to control strong feelings and impulses?',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 36,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
      new RadioQuestion({
        key: 'q37',
        label: '9. When bad things happen to me or anyone else, I feel no emotion.',
        options: [
          {key: 1, value: 'Not at all'},
          {key: 2, value: 'A moderate amount'},
          {key: 3, value: 'Very much'},
          {key: 4, value: 'An extreme amount'}
        ],
        order: 37,
        domain: 'behavioral',
        subdomain: 'reaction'
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getACE() {
    let questions : QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q38',
        label: '1.  Did a parent or other adult in the household often or very often swear at you, insult you, put you down, or humiliate you, or act in a way that made you afraid that you might be physically hurt? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 38,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q39',
        label: '2. Did a parent or other adult in the household often or very often push, grab, slap, or throw something at you, or ever hit you so hard that you had marks or were injured?',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 39,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q40',
        label: '3. Did an adult or person at least 5 years older than you ever touch or fondle you, or have you touch their body in a sexual way, or attempt, or actually have oral, anal, or vaginal intercourse with you? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 40,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q41',
        label: '4. Did you often or very often feel that  no one in your family loved you, or thought you were important, or special, or your family didn\'\t look out for each other, feel close to each other, or support each other? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 41,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q42',
        label: '5.Did you often or very often feel that you didn\'t have enough to eat, had to wear dirty clothes, and had no one to protect you, or your parents were too drunk or high to take care of you, or take you to the doctor if you needed it? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 42,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q43',
        label: '6. Was a biological parent ever lost to you through divorce, abandonment, or other reason? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 43,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q44',
        label: '7. Was your parent or guardian, often or very often pushed, grabbed, slapped, or had something thrown at them, or sometimes, often, or very often kicked, bitten, hit with a fist, or hit with something hard, or ever repeatedly hit over at least a few minutes, or threatened with a gun or knife? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 44,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q45',
        label: '8. Did you live with anyone who was a problem drinker, or alcoholic, or who used street drugs? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 45,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q46',
        label: '9. Was a household member depressed or mentally ill, or did a household member attempt suicide? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 46,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
      new RadioQuestion({
        key: 'q47',
        label: '10. Did a household member go to prison? ',
        options: [
          {key: 0, value: 'Yes'},
          {key: 1, value: 'No'},
        ],
        order: 47,
        domain: 'behavioral',
        subdomain: 'ace'
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }



  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'q1',
        label: '1. How many children do you have?',
        placeholder: 'Please select a number',
        options: [
          {value: '0', viewValue: 'None'},
          {value: '1', viewValue: '1 - 2'},
          {value: '2', viewValue: '3 - 4'},
          {value: '3', viewValue: '5 - 6'},
          {value: '4', viewValue: '7 or more'}
        ],
        order: 1
      }),
      new DropdownQuestion({
        key: 'q2',
        label: '2. How many live with you?',
        placeholder: 'Please select a number',
        options: [
          {value: '0', viewValue: 'None'},
          {value: '1', viewValue: '1 - 2'},
          {value: '2', viewValue: '3 - 4'},
          {value: '3', viewValue: '5 - 6'},
          {value: '4', viewValue: '7 or more'}
        ],
        order: 2
      }),
      new DropdownQuestion({
        key: 'q3',
        label: '3. How many people do you currently live with?',
        placeholder: 'Please select a number',
        options: [
          {value: '0', viewValue: '0'},
          {value: '1', viewValue: '1'},
          {value: '2', viewValue: '2'},
          {value: '3', viewValue: '3'},
          {value: '4', viewValue: '4'},
          {value: '5', viewValue: '5 or more'}
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'q7',
        label: '7. How many hours do you work per week?',
        options: [
          {value: '0', viewValue: '0'},
          {value: '1', viewValue: 'less than 20'},
          {value: '2', viewValue: '20 - 39'},
          {value: '3', viewValue: '40 or more'}
        ],
        order: 7
      }),
      new DropdownQuestion({
        key: 'q18',
        label: '18. To what extent do you have access to medical care when you need it?',
        options: [
          {value: '0', viewValue: '0'},
          {value: '1', viewValue: '1'},
          {value: '2', viewValue: '2'},
          {value: '3', viewValue: '3'},
          {value: '4', viewValue: '4'},
          {value: '5', viewValue: '5'},
        ],
        order: 18
      }),
      new DropdownQuestion({
        key: 'q22',
        label: '22. What is the appropriate range for your annual household income?',
        options: [
          {value: '0', viewValue: '1,000 - 9,999'},
          {value: '1', viewValue: '10,000 - 19,999'},
          {value: '2', viewValue: '20,000 - 29,999'},
          {value: '3', viewValue: '30,000 - 39,999'}
        ],
        order: 18
      }),


      //radio button questions
      new RadioQuestion({
        key: 'q4',
        label: '4. Do you own a home?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 4
      }),

      new RadioQuestion({
        key: 'q5',
        label: '5. Do you rent?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 5
      }),

      new RadioQuestion({
        key: 'q6',
        label: '6. Are you employed?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 6
      }),

      new RadioQuestion({
        key: 'q8',
        label: '8. Have you served in the Armed Forces?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 8
      }),
      new RadioQuestion({
        key: 'q9',
        label: '9. Did you graduated from high school or have a GED?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 9
      }),
      new RadioQuestion({
        key: 'q10',
        label: '10. Do you have a valid diver license?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 10
      }),
      new RadioQuestion({
        key: 'q11',
        label: '11. Do you have a current id in your possession?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 11
      }),
      new RadioQuestion({
        key: 'q12',
        label: '12. Do you own a working car with car insurance?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 12
      }),
      new RadioQuestion({
        key: 'q13',
        label: '13. Do you have a felony record?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 13
      }),
      new RadioQuestion({
        key: 'q14',
        label: '14. Are you on probation or parole?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 14
      }),
      new RadioQuestion({
        key: 'q15',
        label: '15. Do you have a bank account?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 15
      }),
      new RadioQuestion({
        key: 'q16',
        label: '16. Are you scared or worried about anyone being released from jail?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 16
      }),
      new RadioQuestion({
        key: 'q17',
        label: '17. Do you currently have a health insurance?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 17
      }),

      //text input question
      new TextboxQuestion({
        key: 'q19',
        label: '19. How long has it been since your most recent visit to a healthcare provider outside of the Emergency Room?',
        order: 19
      }),
      new TextboxQuestion({
        key: 'q20',
        label: '20. How long has it been since you have a dentist?',
        order: 20
      }),
      new TextboxQuestion({
        key: 'q21',
        label: '21. What is your actual range of income?',
        order: 21
      }),
      new TextboxQuestion({
        key: 'q23',
        label: '23. What church or house of worship do you attend?',
        order: 23
      }),



    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}
