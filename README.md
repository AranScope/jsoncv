# jsoncv
[Link to the project](https://jsoncv.aran.site)
Store your CV in JSON and don't look back!

Head over to the link above and paste in the JSON below. Sections can have any title, each subsection must have a title subtitle and description. It's simple and flexible.

```
{
	

    "author": {
        "name": "Aran Long",
        "role": "Hacker, Maker, Comp Sci"
    },
   "sections": {
        "experience": [
            {
                "title": "InventiveCogs",
                "subtitle": "Technical Consultant, Sep 2016 - Present",
                "description": "Developed internal maps microservice using Node, Python, PostgreSQL, OSM, ZMQ, EC2. Designing internal AWS microservices architecture. Reduced requirement for real world testing through development of mock GPS replay system."
            },
            {
                "title": "Autodesk",
                "subtitle": "C++ Software Engineer, Summer 2016",
                "description": "Rebuilt core XML abstract library, resulting in 100% backend UNIX compatibility. Implemented error checking into macro scripting."
            },
            {
                "title": "University of Birmingham",
                "subtitle": "Student Ambassador / Robotics Outreach, Nov 2015 - Sep 2016",
                "description": "Led insight days on the basics of robotics in local schools. Gave talks and tours to incoming students."
            }
        ],
        "achievements": [
        	{
        		"title": "Junction",
        		"subtitle": "Helsinki, Finland, November 2016",
        		"description": "Awarded the Deezer prize for the development of a virality focussed bus stop game. Built using a microservices approach. Aran built the motion tracking microservice, using Python, Flask, SocketIO and OpenCV. "
        	},
            {
                "title": "Brumhack",
                "subtitle": "Birmingham, UK, November 2016",
                "description": "Awarded the first-place prize for developing ‘See’, a computer vision powered web application to help the blind see. Built using HTML, SCSS, JQuery, Clarifai, Microsoft Azure Cognitive."
            },
            {
                "title": "HackUPC",
                "subtitle": "Barcelona, Spain, October 2016",
                "description": "Awarded best use of Amazon AWS for developing ‘notifi.click’, a no cost notification system built using a microservices architecture on AWS and Amazon Dash buttons."
            },
            {
                "title": "Gadget Show",
                "subtitle": "Various, UK, Summer 2016",
                "description": "Developed, with a team of 10, a speed dating chatbot that featured on the UK TV show. I built the data entry stack and architected the project"
            },
            {
                "title": "Cisco",
                "subtitle": "Heathrow, UK, October 2015",
                "description": "Awarded the first-place prize for developing 'Permission Cloud'. A Blockchain based IOT permissions management system developed in collaboration with Barclays"
            }
        ]
    }
}
```
