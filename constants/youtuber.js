export const youtuber = [
    {
        id: 1,
        name: "괴물쥐",
        thumbnail: require("../assets/images/yotubers_profile/괴물쥐/괴물쥐_썸네일.jpg"),
        details: {
            image: require("../assets/images/yotubers_profile/괴물쥐/괴물쥐_썸네일.jpg"),
            age: "25세",
            genre: "롤 유튜버",
            ratings: 7.8,
            subscriber: "84.8만명",
        },
        explain: {
            explain_detail: "",
        }
    },
    {
        id: 2,
        name: "도파",
        thumbnail: require("../assets/images/yotubers_profile/도파/도파_썸네일.jpg"),
        details: {
            image: require("../assets/images/yotubers_profile/도파/도파_썸네일.jpg"),
            age: "28세",
            genre: "롤 유튜버",
            ratings: 8.8,
            subscriber: "63만명",
        }
    },
    {
        id: 3,
        name: "랄로",
        thumbnail: require("../assets/images/yotubers_profile/랄로/랄로_썸네일.jpg"),
        details: {
            image: require("../assets/images/yotubers_profile/랄로/랄로_썸네일.jpg"),
            age: "26세",
            genre: "롤 유튜버",
            ratings: 8.3,
            subscriber: "53.4만명",
        }
    },
    {
        id: 4,
        name: "파카",
        thumbnail: require("../assets/images/yotubers_profile/파카/파카_썸네일.jpg"),
        details: {
            image: require("../assets/images/yotubers_profile/파카/파카_썸네일.jpg"),
            age: "26세",
            genre: "롤 유튜버",
            ratings: 7.8,
            subscriber: "27.5만명",
        }
    },
]

export const continueWatching = [
    {
        id: 1,
        name: "괴물쥐",
        thumbnail: require("../assets/images/yotubers_profile/괴물쥐/괴물쥐_썸네일.jpg"),
        overallProgress: "20%",
        details: {
            image: require("../assets/images/yotubers_profile/괴물쥐/괴물쥐_썸네일.jpg"),
            age: "16+",
            genre: "Action",
            ratings: 8.3,
        }
    },
    {
        id: 2,
        name: "파카",
        thumbnail: require("../assets/images/yotubers_profile/파카/파카_썸네일.jpg"),
        overallProgress: "50%",
        details: {
            image: require("../assets/images/yotubers_profile/파카/파카_썸네일.jpg"),
            age: "16+",
            genre: "Political Drama",
            ratings: 8.7,
        }
    },
    {
        id: 3,
        name: "랄로",
        thumbnail: require("../assets/images/yotubers_profile/랄로/랄로_썸네일.jpg"),
        overallProgress: "70%",
        details: {
            image: require("../assets/images/yotubers_profile/랄로/랄로_썸네일.jpg"),
            age: "18+",
            genre: "Romance",
            ratings: 7.3,
        }
    },
    {
        id: 4,
        name: "도파",
        thumbnail: require("../assets/images/yotubers_profile/도파/도파_썸네일.jpg"),
        overallProgress: "40%",
        details: {
            image: require("../assets/images/yotubers_profile/도파/도파_썸네일.jpg"),
            age: "28세",
            genre: "롤 유튜버",
            ratings: 8.8,

        }
    },
]

const youtubers = { youtuber, continueWatching };

export default youtubers;