let count = localStorage.getItem("page_hits") || 0;
count++;
localStorage.setItem("page_hits", count);
document.getElementById("counter").innerText = count;
function openDetails(feature) {
    const featureData = {
        "AI": {
            title: "Artificial Intelligence",
            img: "https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            desc: "AI is transforming industries with automation and intelligence.",
            courses: [
                { name: "Google AI Certification", link: "https://ai.google/education/" },
                { name: "Deep Learning Specialization", link: "https://www.coursera.org/specializations/deep-learning" },
                { name: "IBM AI Engineering", link: "https://www.coursera.org/professional-certificates/ai-engineer" }
            ]
        },
        "Cloud": {
            title: "Cloud Computing",
            img: "https://emeritus.org/wp-content/uploads/2023/12/cloud-computing-skills.png",
            desc: "Cloud computing ensures secure, scalable, and efficient data storage.",
            courses: [
                { name: "AWS Solutions Architect", link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
                { name: "Microsoft Azure Fundamentals", link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/" },
                { name: "Google Cloud Certification", link: "https://cloud.google.com/certification" }
            ]
        },
        "VRAR": {
            title: "Virtual & Augmented Reality",
            img: "https://www.brightviewtechnologies.com/data/uploads/media/image/AR-Applications.jpg?w=1024",
            desc: "AR & VR redefine user experiences through immersive technology.",
            courses: [
                { name: "Unity VR Development", link: "https://learn.unity.com/pathway/vr-development" },
                { name: "Meta AR Professional", link: "https://www.meta.com/skills/ar" },
                { name: "XR Developer Certification", link: "https://www.xrbootcamp.com/" }
            ]
        }
    };

    document.getElementById("feature-title").innerText = featureData[feature].title;
    document.getElementById("feature-img").src = featureData[feature].img;
    document.getElementById("feature-desc").innerText = featureData[feature].desc;

    const coursesList = document.getElementById("feature-courses");
    coursesList.innerHTML = "";
    featureData[feature].courses.forEach(course => {
        coursesList.innerHTML += `<li class="list-group-item"><a href="${course.link}" target="_blank">${course.name}</a></li>`;
    });

    new bootstrap.Modal(document.getElementById("featureModal")).show();
}
function suggestTechField() {
const skills = document.getElementById("user-skills").value.toLowerCase();
let suggestion = "We recommend exploring ";

if (skills.includes("python") || skills.includes("machine learning") || skills.includes("data")||skills.includes("NLP")||skills.includes("Machine Learning")) {
    suggestion += "Artificial Intelligence (AI).";
} else if (skills.includes("cloud") || skills.includes("aws") || skills.includes("azure") || skills.includes("networking")||skills.includes("networking")||skills.includes("linux")||skills.includes("application programing interfaces(apis)")||skills.includes("DevOps")) {
    suggestion += "Cloud Computing.";
} else if (skills.includes("unity") || skills.includes("3d") || skills.includes("vr") || skills.includes("ar")) {
    suggestion += "Virtual & Augmented Reality (VR/AR).";
} else {
    suggestion = "Based on your skills, we suggest exploring general software development before specializing.";
}

document.getElementById("suggestion-result").innerText = suggestion;
}