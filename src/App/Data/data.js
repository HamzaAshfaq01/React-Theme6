import logo from '../../images/logo.png'
import aboutimage from '../../images/main.jpg'
import icon_1 from '../../images/icon-1.png'
import icon_2 from '../../images/icon-2.png'
import icon_3 from '../../images/icon-3.png'
import icon_4 from '../../images/icon-4.png'
import icon_5 from '../../images/icon-5.png'
import icon_6 from '../../images/icon-6.png'
import portfolio_image1 from '../../images/img1.png'
import portfolio_image2 from '../../images/img2.png'
import portfolio_image3 from '../../images/img3.png'
import portfolio_image4 from '../../images/img4.png'
import team_image1 from '../../images/img-7.png'
import team_image2 from '../../images/img-8.png'
import team_image3 from '../../images/img-9.png'
const content=
[
    {logo:logo,
    nav:[
        "Home","About Us","Services","Blog","Contact Us"
    ],
    navbtn:'SignUp Now',
    header_text:{
        heading1:'TRUSTED AND PROFESSIONAL ADVISERS',
        heading2:'FOR YOUR BUSINESS',
        paragragh:'Showcase your Profile to the world using online CV builder and Get Hired Faster',
        btn_text:'About Us'
    },
    about_header:{
        number:'01',
        aboutus:'About Us',
        grow:'HELP YOUR BUSINESS GROW',
        grow_span:'We Can',
        paragraph:'Get your Business in 4 easy steps'
    },
    about_left_img:aboutimage,
    about_right:{
        heading:'EVERYTHING YOU NEED IN ONE SOLUTION',
        paragraph:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.."
    },
    services_header:{
        number:'02',
        aboutus:'Services',
        grow:'TOOLS THAT HELP ANYONE GIVE A VOICE TO THIER IDEAS',
        grow_span:'HOW TO PROVIDE ',
    },
    services_boxes:[


       {
           box_image:icon_1,
           box_heading:'Digital Marketing',
           box_paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
       },
       {
        box_image:icon_2,
        box_heading:'Digital Marketing',
        box_paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        box_image:icon_3,
        box_heading:'Digital Marketing',
        box_paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        box_image:icon_4,
        box_heading:'Digital Marketing',
        box_paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        box_image:icon_5,
        box_heading:'Digital Marketing',
        box_paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        box_image:icon_6,
        box_heading:'Digital Marketing',
        box_paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    ],
    portfolio_header:{
        number:'03',
        aboutus:'Portfolio',
        grow:'A PROFFESIONAL DESIGN',
        grow_span:'CHOOSE A ',
        para:'Websites',
        paragraph:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their",
        btn_text:'See More',
    },
    portfolio_images:[
        {
            portfolio_img:portfolio_image1
        },
        {
            portfolio_img:portfolio_image2
        },
        {
            portfolio_img:portfolio_image3
        },
        {
            portfolio_img:portfolio_image4
        },
    ],
    business_header:{
        number:'04',
        grow:'CREATE',
        grow_span:'PERSONALIZED BUSINESS',
        para:'What we done',
        paragraph:"ss normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in theirss normal distribution of letters, as opposed to using 'Content here, content here', making it look like re ed r",
        btn_text:"Read More"
    },
    business_boxes:[
       {
            box_numb:'23',
            box_text:'Nominations',
        },
        {
         box_numb:'7',
         box_text:'Awards',
     },
     {
         box_numb:'31',
         box_text:'Agencies',
     },
    ],
    team_header:{
        number:'05',
        grow:'TEAM OF BUSINESS ANALYSTS',
        grow_span:'WE HAVE A PROFESSIONAL ',
    },
    team_boxes:[
        {
            team_img:team_image1,
            team_name:"John Doe",
            team_info:"this a long established fact that a reader will be distracted by the readable content"
        },
        {
            team_img:team_image2,
            team_name:"John Doe",
            team_info:"this a long established fact that a reader will be distracted by the readable content"
        },
        {
            team_img:team_image3,
            team_name:"John Doe",
            team_info:"this a long established fact that a reader will be distracted by the readable content"
        },
    ],
    footer:{
        footer_logo:logo,
        footer_contact:{
            heading:"Contact Us",
            address:"London 145 United Kingdom",
            email1:"consultation@gmail.com",
            email2:"consultation@gmail.com",
            phone:"+7586656566",
            recent_post:"Participate in staff meetings manage dedicated to marketing November 25, 2019",
            newsletter_btn:"Submit"
        },
        footer_menus:["Home","About Us","Services","Blog","Contact Us"],
        footer_menu_heading:"Menus",
        footer_post_heading:"Recent Post",
        footer_newsletter_heading:"Newsletter",
    }
}
]
export default content;