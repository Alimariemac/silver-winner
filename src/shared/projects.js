//queerly
import queerlyMain from "../assets/queerlyMain.jpg"
//illustrations
import illustrationMain from "../assets/illustrations/illustrationMain.jpg"
import bathing from "../assets/illustrations/bathing.jpg"
import breakfast from "../assets/illustrations/breakfast.jpg"
import cacao from "../assets/illustrations/cacao.jpg"
import chickfilgay from "../assets/illustrations/chickfilgay.jpg"
import crystalball from "../assets/illustrations/crystalball.jpg"
import desert from "../assets/illustrations/desert.jpg"
import fighting from "../assets/illustrations/fighting.jpg"
import hanami from "../assets/illustrations/hanami.jpg"
import purplegirl from "../assets/illustrations/purplegirl.jpg"
import scientist from "../assets/illustrations/scientist.gif"
import windows from "../assets/illustrations/windows.jpg"
//batch
import batchMain from "../assets/batch-export/batchExportMain.jpg"
//jager
import JagerMain from "../assets/Jagerphone.jpg"
//fsq
import FSQMain from "../assets/FSQMain.jpg"
//color backgrounds
import yellow from "../assets/textures/texture1.jpg"
import blue from "../assets/textures/texture2.jpg"
import purple from "../assets/textures/texture3.jpg"
import green from "../assets/textures/texture4.jpg"
import orange from "../assets/textures/texture5.jpg"
//svg illustrations
import rainbow from "../assets/rainbow.svg"
import flower from "../assets/flower.svg"
import ruler from "../assets/ruler.svg"

export const PROJECTS = [
    {
        id:0,
        name:"Launching a brand new Foursquare",
        images:[{id:0, src:FSQMain}],
        backgroundImage: purple,
        text1:"Web",
        text2:"Design",
        description:"I led Foursquare's website consolidation project where we merged 3 companies (and their websites) into one cohesive brand and website that finally encapsulated the story of Foursquare and where it is today.", 
        color:"#A18ABA",
        year:"2019",
        company: "Foursquare",
        tags: "UX/UI\nproject management\nillustration\nvideos",
        tldr:"",
        role:"",
        why:"",
        research:"",
        iterations:"",
        next:"",
        icon:flower,
        numbers:[{id:0, num:"300", text:"hello"},{id:1, num:"200", text:"hello"},{id:2, num:"100", text:"hello"}],
        special: false

    },
    {
        id:1,
        name:"Allowing more flexibility with batch export and delete",
        images:[{id:0, src:batchMain}],
        backgroundImage: green,
        text1:"Product",
        text2:"Design",
        description:"Clients who used our geofence uploader asked for the ability to batch export and batch delete geofences as well as search the geofence table. Before this project, users could only individually delete or export geofences.",
        color:"#00BB84",
        year:"2020",
        company: "Foursquare",
        tags: "UX\nUI",
        tldr:"Clients who used our geofence uploader asked for the ability to batch export and batch delete geofences as well as search the geofence table. Before this project, users could only individually delete or export geofences.",
        role:"For this project, I lead brainstorming sessions, created user flows with the project manager, created wireframes, prototypes and final designs.",
        why:"Unless the client was a developer, the only way for them to delete or export was individually. This caused frustration when users wanted to delete more than one geofence at a time.",
        research:"A previous version of the dashboard had a batch delete and export option that was then removed during another round of design. I evaluated the previous design, spoke to the designer who chose to remove it, and did external research as well.",
        iterations:"For a seemingly simple change, this project went through a lot of iterations. The previous design that had the proper functionality seemed a bit disjointed, with the action buttons being quite far away from the objects that were being acted upon. My solution was a 'drawer' that would pop open when the user checked off a geofence. This seemed to work well but in presenting it to the project manager, I realized I had missed a key component. The main ask for this project was the ability to mass-export or delete, with a focus on being able to delete or export all of the geofences. This solution made the user go through too many actions to delete all geofences. First the user had to check off the top box, then 'select all' and then delete all. This works well if the user usually deletes one and may want to delete 2 or 3, but if the main point was to allow a fast way to delete/export all geofences, then this design missed the mark. I took a step back and looked at the project from a different lens and thought about how I could make delete all and export all more accessible. A drop-down menu was mentioned as a solution but seemed to be a bandaid rather than something well thought out. After careful consideration, I decided to make the first action available be 'export all (xnumber)' and 'delete all (xnumber)'. After the user ticked off a checkbox, this would change to 'export (xnumber)' and 'delete (xnumber)'. This change allowed for the main action to be easily taken without putting the user through a multi-step process.",
        next:"This project is currently in its dev handoff stage. Once implemented, we will solicit feedback from users, especially those who asked for this change. The biggest learning from this project was the importance of keeping the users' needs front and center.",
        icon:rainbow,
        numbers:[{id:0, num:"300", text:"hello"},{id:1, num:"200", text:"hello"},{id:2, num:"100", text:"hello"}],
        special: false
    },
    {
        id:2,
        name:"Creating a queer-focused health start-up's identity",
        images:[{id:0, src:queerlyMain}],
        backgroundImage: blue,
        text1:"Brand",
        text2:"Design",
        description:"I created a unique brand for Queerly Health and implemented it into their website. The final site aslo included a more user-friendly map and a precise and clear call-to-action. ",
        color:"#00B0BB",
        year:"2019/2020",
        company: "Queerly Health",
        tags: "branding \ndesign \ndevelopment\n illustration",
        tldr:"Queerly Health is a start-up focusing on connecting the LGBTQ community with trained health and wellness providers. I was asked to help implement their refreshed brand into their website as well as improve the functionality of the website. The final site implemented a more user-friendly map and a precise and clear call-to-action and can be seen live here.",
        role:"In this position, I lead brainstorming sessions, conducted competitive research, outlined the userflow and did all ui and visual design work including illustrations and webflow implementation.",
        why:"Queerly Health had a marketing website already, but they had problems getting people to sign up for the newsletter and problems with a confusing site structure. The team wanted to streamline their site as well as implement the brand update that I had helped them create.",
        research:"We conducted a wide range of competitive research ranging from medical apps to booking apps. We narrowed our focus down to a few high-performing competitors including: Zocdoc, Maven, Tia and One Medical. We also created personas based on our two main customer groups; someone looking for a provider, and the provider themselves.",
        iterations:"After going through the existing website, personas and user-flows, I started sketching out ideas on paper to explore the easiest way to present information to the user. One of the main functionality changes was making newsletter sign-up easier. Previously, if a user clicked 'sign-up for newletter' they would be punted to a new page that had a form with many inputs including pronouns, age etc. The new design allowed for the least amount of friction, the user can just enter their email and sign-up. After presenting to the stakeholders and choosing a direction, I created low-fidelity wireframes of each page and went through them with everyone. During high-fidelity work, I created components to be used across the platform. The new website was created with the intention of growth. We planned that the landing page would eventually evolve from a marketing page to a functional search page that would move the user through the sign-up and search flow. Therefore, I created a lot of the design as modules that could be moved around, added and subtracted. The resulting website provided a simpler user flow and a clearer call-to action.",
        next:"We are still in the implementation phase of this project, so next steps are to publish the website and implement continuous user research. Looking back, this project should have had more time allocated to the design process. This was a quickly implemented project based on time constraints. I would have also liked to do more user research and spoken to more potential users. This will hopefully be an iterative project and we will continue to update based on the data we get from google analytics and mailchimp.",
        icon:rainbow,
        numbers:[{id:0, num:"300", text:"hello"},{id:1, num:"200", text:"hello"},{id:2, num:"100", text:"hello"}],
        special: false
    },
    {
        id:3,
        name:"Coding an interactive quiz ad in JS",
        images:[{id:0, src:JagerMain}],
        backgroundImage: orange,
        text1:"Develo-",
        text2:"pment",
        description:"As part of a 2-designer team, I helped design and build a unique interactive quiz mobile ad for Jagermeister that tapped into Foursquare's proprietary taste data.",
        color:"#F6912E",
        year:"2019",
        company: "Foursquare",
        tags: 'development \ndesign',
        tldr:"Jagermeister tapped Foursquare to create a interactive mobile ad experience that allowed users to explore some of the many flavors in Jagermeister. Using Foursquare's taste data, we created a 4-part quiz to pair a shot of Jager with the perfect beer.",
        role:"Working on a 2-designer team I participated in brainstorms and client calls, created wireframes of the unit, and created low and high-fidelity mockups. My main position on this team however, was to write the code that was needed to make the unit work. This required many lines or javascript as well as a lot of testing to make sure the code didn't break at any point.",
        why:"Jagermeister wanted a custom media unit created for them to emphasize their 'beer and deer' campaign.",
        research:"A lot of the styling was already provided by Jagermeister, most of the research was geared towards optimizing the media unit to perform well.",
        iterations:"The PM created a matrix to understand which answers lead to which outcome. I then worked off of that matrix to write out how I was going to code the unit. On the design end, the other designer and I put together mid-fidelity mockups to walk the client through. Once those were approved, we moved onto the high-fidelity and prototype. The client had changed the matrix many times up until about 2 weeks before launch. Because of this, much of the coding was done at the very end. Even with the delay, I was able to get a group of people into a room to test on multiple devices. Luckily, we caught a bug or two and fixed before launching. This unit performed very well for time-spent on unit.",
        next:"We learned that while this unit performed well once the viewer was on the expanded page, it would have performed better if there wasn't a barrier to entry (ie: if it were an interstital or interscroller and not an expandable banner).",
        icon:ruler,
        numbers:[{id:0, num:"300", text:"hello"},{id:1, num:"200", text:"hello"},{id:2, num:"100", text:"hello"}],
        special: false

    },
    {
        //blue
        id:4,
        name:"Illustrations",
        images:[{id:0, src:illustrationMain, width:1, height:1},{id:1, src:bathing, width:1, height:1},{id:2, src:breakfast, width:2, height:3},{id:3, src:windows, width:2, height:3},{id:4, src:cacao, width:1, height:1.5},{id:5, src:chickfilgay, width:1, height:1},{id:6, src:crystalball, width:1.5, height:1},{id:7, src:desert, width:1, height:1},{id:8, src:fighting, width:1, height:1.333333},{id:9, src:hanami, width:2.5, height:2},{id:10, src:purplegirl, width:1, height:1.5},{id:11, src:scientist, width:1, height:1}],
        backgroundImage: yellow,
        text1:"Illus-",
        text2:"tration",
        description:"Personal illustrations in a range of styles created in procreate and Adobe Illustrator.",
        color:"#FAE33F",
        year:"2019",
        company: "Personal",
        tags: "illustration \nprocreate \ncolor \nAdobe Illustrator",
        tldr:"",
        role:"",
        why:"",
        research:"",
        iterations:"",
        next:"",
        icon:ruler,
        numbers:[{id:0, num:"300", text:"hello"},{id:1, num:"200", text:"hello"},{id:2, num:"100", text:"hello"}],
        special: true

    }
]