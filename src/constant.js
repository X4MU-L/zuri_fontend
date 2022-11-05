import Image from "../src/assets/images/my_image.jpeg"
import Camera from "../src/assets/icons/camera.svg"
import Logo from "../src/assets/icons/logo.svg"
import I4G from "../src/assets/icons/I4G.svg"
import github_logo from "../src/assets/icons/github.svg"
import slack_logo from "../src/assets/icons/slack.svg"

export const PROFILE = [
    {
        "id" : "profile_img",
        "img": Image,
        "img_alt":"Chukwuebuka Samuel Okoli",
        "icon": Camera,
        "icon_alt":"camera icon"
    },
    {
        "id" : "twitter",
        "text": "Brownie",
    },
    {
        "id" : "slack",
        "text": "Chukwuebuka Samuel Okoli",
    },
]


export const LINKS = [
    {
        "id" : "twitter_link",
        "text": "Twitter Link",
        "link": "https://twitter.com/iamwizzbrown",
    },
    {
        "id" : "btn_zuri",
        "text": "Zuri Team",
        "link": "https://training.zuri.team/",
    },
    {
        "id" : "books",
        "text": "Zuri Books",
        "link": "http://books.zuri.team",
    },
    {
        "id" : "book_python",
        "text": "Python Books",
        "link": "https://books.zuri.team/python-for-beginners?ref_id=Brownie",
    }
    ,
    {
        "id" : "pitch",
        "text": "Background Check for Coders",
        "link": "https://background.zuri.team",
    }
    ,
    {
        "id" : "book__design",
        "text": "Design Books",
        "link": "https://books.zuri.team/design-rules",
    },{
        "id" : "contact",
        "text": "Contact Me",
        "link": "/contact",
    }

]

export const SOCIALS = [
    {
        "logo" : slack_logo,
        "alt": "Slack Logo",
        "link" : "https://slack-x6o1507.slack.com"
    },
    {
        "logo" : github_logo,
        "alt": "GitHub Logo",
        "link" : "https://github.com/X4MU-L"
    }
]

export const FOOTER = [
    {
        "logo": Logo,
        "logo_alt":"Zuri Internship Logi",
        "text":"HNG Internship 9 Frontend Task",
        "I4G":I4G,
        "I4G_alt":"Ingressive for Good Logo"
    }
]


