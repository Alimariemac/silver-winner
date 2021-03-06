import flower from "../assets/flower.svg"
import ruler from "../assets/ruler.svg"
import rainbow from "../assets/rainbow.svg"
import stars from "../assets/stars.svg"
import {IMAGES} from "./Images"

const FSQImages = IMAGES.filter(i=> i.project === "FSQ")[0]
const BatchImages = IMAGES.filter(i=> i.project === "Batch")[0]
const QueerlyImages = IMAGES.filter(i=> i.project ==="Queerly")[0]
const JagerImages = IMAGES.filter(i=>i.project ==="Jager")[0]
const Illustrations = IMAGES.filter(i => i.project ==="Illustrations")[0]
const BackgroundImages = IMAGES.filter(i=> i.project==="backgrounds")[0].images


export const PROJECTS = [
    {
        id:0,
        name:"Launching a brand new Foursquare",
        images: FSQImages.images,
        backgroundImage: BackgroundImages[0].src,
        fullImage: FSQImages.fullImage.src,
        coverImage: FSQImages.coverImage.src,
        text1:"Web",
        text2:"Design",
        description:"I led Foursquare's website consolidation project where we merged 3 companies into one cohesive brand and website that finally encapsulated the story of Foursquare and where it is today.", 
        color:"#A18ABA",
        year:"2019",
        company: "Foursquare",
        tags: "UX/UI\nproject management\nillustration\nvideos",
        tldr:"Foursquare had acquired Factual and Placed in the past 3 years and was at the point as a company where it needed a cohesive brand and website to really tell the story of where Foursquare is today. Many people still think of Foursquare as the 'check-in app' when in reality it a leader in the location technology space. To achieve this, we combined the 3 companies' websites into one new one along with a new, more minimalist brand that lets Foursquare's data and accomplishments speak for itself.  ",
        role:"I ran the preliminary stakeholder and UX research, conducted a site-audit and created the site map, user-flows and component maps for each page. I communicated my findings with our design/development agency, Fictive Kin, as they fleshed out the design for the reusable components. I also created many of the illustrations and videos and delegated work to other designers when needed. I kept stakeholders in the loop of the project and facilitated conversations between the proper people. I worked with Foursquare's Engineering team and Infrastructure team to make sure that there was a seamless transition between the old site and new site.",
        why:"Foursquare's identity had been confused for a while. We had multiple different design styles, brand voices and a general lack of direction conveyed. This was made all the worse when we acquired not one, but two other location companies. The old website was beginning to be outdated and had quite high bounce rates due to confusion over what our products were. The new website launch corresponded with a full rebrand and focused on re-introducing our products with less jargon to our customers, new and old.",
        research:"I started this project with a lot of research. Although we knew we wanted to create a new website, we wanted to make sure that it implemented needs from across the organisation. I started with stakeholder interviews with 16 main stakeholders of the organisation and 6 top customers and compared the top-mentioned needs. They included: the need for better lead generation, making the website more customer focused (how we solve our customer's problems), telling a cohesive story and implementing a more intuitive navigation. I also conducted a company-wide survey on the three websites that were to be merged and a site-audit on all three sites. Based on the preliminary research and the site audit, I created V1 of a sitemap. I then walked different stakeholders through the map to get feedback and update. I created a V2 as well and then the team presented the 2 options to leadership. Based on the site map and the user personas (that the product-marketing team created), I created 6 user flows to map out the most common optimal path for these users. Based on these we knew what actions we wanted the users to take and how to direct them.",
        iterations:"Based on the site map, I created a “component map” spreadsheet for each page of the site. The spreadsheet included the user mindset, user tasks, org goal, and key metrics. Then I mapped out each page in words including a label, description, core content, and features. The template for this was provided by Fictive Kin. Based on the component maps, I took the wireframed components created by Fictive Kin and conducted Stakeholder calls to create wireframes of each full page. I then “translated” each design into a document for the Stakeholders to fill out (copy and links) so that the design team knew what we would have to create (illustrations, images etc.). After this I delegated designs to the rest of the design team members, taking on the bulk to the icon creation, illustrations and videos myself (as our small team was also updating all collateral in the new brand as well!). We enlisted the help of an SEO company (Jordan Digital Marketing) to help make sure that our site didn't lose traffic in any way. Before launch, we had an internal launch for the members of Foursquare to get feedback and do bug checks. Through this feedback we found that many people found the home page very ambiguous. The goal was to make it feel less static than the old home page but many people felt like it did not represent the company properly and that it felt almost like an online magazine homepage. After iterating on a few ideas, we came up with a homepage that tells you directly about Foursquare, and lists out solutions for our customers problems.",
        next:"Our next steps are to implement a solutions section in the menu that allows our users to self-identify by job or vertical. These pages will help bring our multiple products together into a suite. We will also be expanding on our partner page to allow people to filter by vertical for easy access. We will also keep an eye on bounce rates and leads to make sure they are within acceptable bounds. ",
        icon:flower,
        quote:'"The products overview and product pages are extremely clear and organized. I like the product benefits and demos towards the end of the page. Overall, the branding looks really nice and clean."',
        attribution:"-internal website feedback",
        special: false

    },
    {
        id:1,
        name:"Allowing more flexibility with batch export and delete",
        images:BatchImages.images,
        backgroundImage: BackgroundImages[1].src,
        fullImage: BatchImages.fullImage.src,
        coverImage: BatchImages.coverImage.src,
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
        next:"The biggest learning from this project was the importance of keeping the users' needs front and center.",
        icon:stars,
        numbers:[{id:0, num:"5", text:"requests per week"},{id:1, num:"0", text:"requests after"},{id:2, num:"100%", text:"happy devs"}],
        special: false
    },
    {
        id:2,
        name:"Creating a queer-focused health start-up's identity",
        images:QueerlyImages.images,
        backgroundImage: BackgroundImages[2].src,
        fullImage: QueerlyImages.fullImage.src,
        coverImage: QueerlyImages.coverImage.src,
        text1:"Brand",
        text2:"Design",
        description:"I created a unique brand for Queerly Health and implemented it into their website. The final site also included a more user-friendly map and a precise and clear call-to-action.",
        color:"#00B0BB",
        year:"2019/2020",
        company: "Queerly Health",
        tags: "branding \ndesign \ndevelopment\n illustration",
        tldr:"Queerly Health is a start-up focusing on connecting the LGBTQ community with trained health and wellness providers. I was asked to help implement their refreshed brand into their website as well as improve the functionality of the website. The final site implemented a more user-friendly map and a precise and clear call-to-action and can be seen live here.",
        role:"In this position, I lead brainstorming sessions, conducted competitive research, outlined the userflow and did all ui and visual design work including illustrations and webflow implementation.",
        why:"Queerly Health had a marketing website already, but they had problems getting people to sign up for the newsletter and problems with a confusing site structure. The team wanted to streamline their site as well as implement the brand update that I had helped them create.",
        research:"We conducted a wide range of competitive research ranging from medical apps to booking apps. We narrowed our focus down to a few high-performing competitors including: Zocdoc, Maven, Tia and One Medical. We also created personas based on our two main customer groups; someone looking for a provider, and the provider themselves.",
        iterations:"After going through the existing website, personas and user-flows, I started sketching out ideas on paper to explore the easiest way to present information to the user. One of the main functionality changes was making newsletter sign-up easier. Previously, if a user clicked 'sign-up for newletter' they would be punted to a new page that had a form with many inputs including pronouns, age etc. The new design allowed for the least amount of friction, the user can just enter their email and sign-up. After presenting to the stakeholders and choosing a direction, I created low-fidelity wireframes of each page and went through them with everyone. During high-fidelity work, I created components to be used across the platform. The new website was created with the intention of growth. We planned that the landing page would eventually evolve from a marketing page to a functional search page that would move the user through the sign-up and search flow. Therefore, I created a lot of the design as modules that could be moved around, added and subtracted. The resulting website provided a simpler user flow and a clearer call-to action.",
        next:"Looking back, this project should have had more time allocated to the design process. This was a quickly implemented project based on time constraints. I would have also liked to do more user research and spoken to more potential users. This will hopefully be an iterative project and we will continue to update based on the data we get from google analytics and mailchimp.",
        icon:rainbow,
        quote:"Queerly Health is a NYC-based digital health startup created by and for the LGBTQ+ community.",
        attribution:"Queerly Health",
        special: false
    },
    {
        id:3,
        name:"Coding an interactive quiz ad in JS",
        images:JagerImages.images,
        backgroundImage: BackgroundImages[3].src,
        fullImage: JagerImages.fullImage.src,
        coverImage: JagerImages.coverImage.src,
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
        next:"We learned that while this unit performed well once the viewer was on the expanded page, it would have performed better if there wasn't a barrier to entry (ie: if it were an interstital or interscroller and not an expandable banner). The client ended up running the ad a second time starting it off with a larger, more interactive screen.",
        icon:ruler,
        numbers:[{id:0, num:".16+", text:"engagement rate"},{id:1, num:"11s+", text:"average time spent"},{id:2, num:"2", text:"iterations"}],
        special: false

    },
    {
        //blue
        id:4,
        name:"Illustrations",
        images: Illustrations.images,
        backgroundImage: BackgroundImages[4].src,
        coverImage: Illustrations.coverImage.src,
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