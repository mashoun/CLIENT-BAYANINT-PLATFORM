import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        userID: '',
        UserPassword: '',
        isLogedIn: false,

        userAccount: {
            "profile": {
                "userID": "",
                "password": "",
                "email": "",
                "domain":"",
                "timestamp": "",
                "firstName": "",
                "lastName": "",
                "fathersName": "",
                "phoneNumber": "",
                "major": "",
                "bachelorDegDoc": "",
                "masterDegDoc": "",
                "letterOfIntrestDoc": "",
                "twoLetterOfRecoDoc": "",
                "dateOfBirth": "",
                "countryOfBirth": "",
                "district": "",
                "city": "",
                "street": "",
                "addressDescription": "",
                "nationality": "",
                "gender": "",
                "passportNumber": "",
                "passportDoc": "",
                "facePictureDoc": "",
                "resumeDoc": ""
            },
            "courses": [
                {
                    "semester": "",
                    "code": "",
                    "title": "",
                    "description": "",
                    "link": "",
                    "instructor": "",
                    "index": ""
                }
            ]
        },

        quotes: [
            "Success is not the key to happiness; happiness is the key to success. - Albert Schweitzer",
            "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
            "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. - Booker T. Washington",
            "Success is not always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come. - Dwayne 'The Rock' Johnson",
            "Success is a journey, not a destination. - Arthur Ashe",
            "Success is finding satisfaction in giving a little more than you take. - Christopher Reeve",
            "Success is failure turned inside out. - John Greenleaf Whittier",
            "Success is a lousy teacher. It seduces smart people into thinking they can't lose. - Bill Gates",
            "Success is not in what you have, but who you are. - Bo Bennett",
            "Success is not about the accolades, but the impact you make on others.",
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
            "Studying without thinking is labor lost; thinking without studying is dangerous. - Confucius",
            "Study hard, for the well is deep, and our brains are shallow. - Richard Baxter",
            "Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing. - William Arthur Ward",
            "Study the past if you would define the future. - Confucius",
            "Study without desire spoils the memory, and it retains nothing that it takes in. - Leonardo da Vinci",
            "Study as if you were to live forever; live as if you were to die tomorrow.",
            "Study nature, love nature, stay close to nature. It will never fail you. - Frank Lloyd Wright",
            "Study, and in general, the pursuit of truth and beauty is a sphere of activity in which we are permitted to remain children all our lives. - Albert Einstein",
            "Study without curiosity kills the joy of learning.",
            "Success is the reward for those who combine learning with perseverance.",
            "Studying is the bridge to success; cross it with dedication and passion.",
            "Education is the foundation of success; knowledge is the key to unlocking it.",
            "Successful people never stop learning; they are perpetual students of life.",
            "The secret to success is to study hard, work smart, and stay humble.",
            "In the journey of success, studying is the fuel that keeps you moving forward.",
            "Study with purpose, and success will find you on the path.",
            "Success is the result of disciplined studying and determined action.",
            "A successful person values education and embraces lifelong learning.",
            "Studying is not a burden but a stepping stone to success.",
            "Success and studying go hand in hand; one cannot thrive without the other.",
            "Success is the culmination of countless hours spent in dedicated study.",
            "Knowledge is the compass that guides you to the shores of success.",
            "The ladder to success is built through continuous learning and self-improvement.",
            "Study with passion, and success will dance to your tune.",
            "Success is the melody played by the chords of education.",
            "Study diligently, for it is the stairway to success.",
            "A successful person is a lifelong student, ever curious and hungry for knowledge.",
            "Studying is not just about getting good grades; it's about preparing for a successful life.",
            "Success is the treasure that awaits those who brave the seas of knowledge.",
            "Study hard, for the seeds of success are planted in the fields of learning.",
            "Education is the flame that ignites the fire of success.",
            "Success blooms from the fertile soil of diligent study.",
            "Studying is the compass that points to the destination of success.",
            "Success is the harvest of seeds sown in the garden of learning.",
            "Study diligently, for success is a faithful companion of the learned.",
            "A successful life is built on the solid foundation of continuous learning.",
            "Studying is the bridge that connects you to the shores of success."
        ]

    }),
    actions: {

        getApi() {
            return 'https://script.google.com/macros/s/AKfycbz0El0NBMurxjSYSc3CUspuEH4Hn6JgdWItnqNoFc8kK-UvxqVNFMbFsmUsa5DTt7Z6/exec'
        },

    }
})