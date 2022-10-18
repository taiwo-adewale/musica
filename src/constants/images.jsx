import logo from '../assets/logo.svg'
import heroVector from '../assets/heroVector.svg'
import heroPerson from '../assets/heroPerson.png'
import likesCircle01 from '../assets/likesCircle-01.jpg'
import likesCircle02 from '../assets/likesCircle-02.jpg'
import likesCircle03 from '../assets/likesCircle-03.jpg'
import likesCircle04 from '../assets/likesCircle-04.jpg'
import likesCircle05 from '../assets/likesCircle-05.jpg'
import chart01 from '../assets/chart-01.jpg'
import chart02 from '../assets/chart-02.jpg'
import chart03 from '../assets/chart-03.jpg'
import release01 from '../assets/release-01.jpg'
import release02 from '../assets/release-02.jpg'
import release03 from '../assets/release-03.jpg'
import release04 from '../assets/release-04.jpg'
import release05 from '../assets/release-05.jpg'
import release06 from '../assets/release-06.jpg'
import release07 from '../assets/release-07.jpg'
import album01 from '../assets/album-01.jpg'
import construction from '../assets/construction.jpg'

const heartIcon = <svg className='stroke-primary fill-transparent group-hover:fill-white w-[18px] h-[18px] transition-all duration-300' width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/><path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/></svg>
const heartAlbumIcon = <svg className='hidden md:block stroke-light fill-transparent w-5 h-5 transition-all duration-300' width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/><path opacity="0.4" d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/></svg>
const heartIconWhite = <svg className='w-[16px] h-[16px] fill-white' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.51981 1.66697C5.93981 1.67975 6.34647 1.75308 6.74047 1.88708H6.77981C6.80647 1.89975 6.82647 1.91375 6.83981 1.92641C6.98714 1.97375 7.12647 2.02708 7.25981 2.10041L7.51314 2.21375C7.61314 2.26708 7.73314 2.36641 7.79981 2.40708C7.86647 2.44641 7.93981 2.48708 7.99981 2.53308C8.74047 1.96708 9.63981 1.66041 10.5665 1.66697C10.9871 1.66697 11.4071 1.72641 11.8065 1.86041C14.2671 2.66041 15.1538 5.36041 14.4131 7.72041C13.9931 8.92641 13.3065 10.0271 12.4071 10.9264C11.1198 12.1731 9.70714 13.2797 8.18647 14.2331L8.01981 14.3337L7.84647 14.2264C6.32047 13.2797 4.89981 12.1731 3.60047 10.9197C2.70714 10.0204 2.01981 8.92641 1.59314 7.72041C0.839808 5.36041 1.72647 2.66041 4.21381 1.84641C4.40714 1.77975 4.60647 1.73308 4.80647 1.70708H4.88647C5.07381 1.67975 5.25981 1.66697 5.44647 1.66697H5.51981ZM11.4598 3.77375C11.1865 3.67975 10.8865 3.82708 10.7865 4.10708C10.6931 4.38708 10.8398 4.69375 11.1198 4.79308C11.5471 4.95308 11.8331 5.37375 11.8331 5.83975V5.86041C11.8205 6.01308 11.8665 6.16041 11.9598 6.27375C12.0531 6.38708 12.1931 6.45308 12.3398 6.46708C12.6131 6.45975 12.8465 6.24041 12.8665 5.95975V5.88041C12.8865 4.94641 12.3205 4.10041 11.4598 3.77375Z"/></svg>
const heartIconRed = <svg className='w-[16px] h-[16px] fill-[#E5524A]' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.51981 1.66697C5.93981 1.67975 6.34647 1.75308 6.74047 1.88708H6.77981C6.80647 1.89975 6.82647 1.91375 6.83981 1.92641C6.98714 1.97375 7.12647 2.02708 7.25981 2.10041L7.51314 2.21375C7.61314 2.26708 7.73314 2.36641 7.79981 2.40708C7.86647 2.44641 7.93981 2.48708 7.99981 2.53308C8.74047 1.96708 9.63981 1.66041 10.5665 1.66697C10.9871 1.66697 11.4071 1.72641 11.8065 1.86041C14.2671 2.66041 15.1538 5.36041 14.4131 7.72041C13.9931 8.92641 13.3065 10.0271 12.4071 10.9264C11.1198 12.1731 9.70714 13.2797 8.18647 14.2331L8.01981 14.3337L7.84647 14.2264C6.32047 13.2797 4.89981 12.1731 3.60047 10.9197C2.70714 10.0204 2.01981 8.92641 1.59314 7.72041C0.839808 5.36041 1.72647 2.66041 4.21381 1.84641C4.40714 1.77975 4.60647 1.73308 4.80647 1.70708H4.88647C5.07381 1.67975 5.25981 1.66697 5.44647 1.66697H5.51981ZM11.4598 3.77375C11.1865 3.67975 10.8865 3.82708 10.7865 4.10708C10.6931 4.38708 10.8398 4.69375 11.1198 4.79308C11.5471 4.95308 11.8331 5.37375 11.8331 5.83975V5.86041C11.8205 6.01308 11.8665 6.16041 11.9598 6.27375C12.0531 6.38708 12.1931 6.45308 12.3398 6.46708C12.6131 6.45975 12.8465 6.24041 12.8665 5.95975V5.88041C12.8865 4.94641 12.3205 4.10041 11.4598 3.77375Z"/></svg>

const playlistIcon = <svg className='app__nav-icon' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M15.5833 4.35416H14.6666V2.98832C14.6666 2.22749 14.0433 1.60416 13.2825 1.60416H8.71748C7.95665 1.60416 7.33331 2.22749 7.33331 2.98832V4.35416H6.41665C5.40831 4.35416 4.58331 5.17916 4.58331 6.18749V6.30666C4.87665 6.22416 5.17915 6.18749 5.49998 6.18749H16.5C16.8208 6.18749 17.1233 6.22416 17.4166 6.30666V6.18749C17.4166 5.17916 16.5916 4.35416 15.5833 4.35416Z"/><path d="M12.7691 15.5192C12.4758 15.5192 12.2466 15.7575 12.2466 16.0417C12.2466 16.3258 12.485 16.5642 12.7691 16.5642C13.0533 16.5642 13.2916 16.3258 13.2916 16.0417C13.2916 15.7575 13.0533 15.5192 12.7691 15.5192Z"/><path d="M8.31419 16.3258C8.02085 16.3258 7.79169 16.5642 7.79169 16.8483C7.79169 17.1325 8.03002 17.3708 8.31419 17.3708C8.59835 17.3708 8.83669 17.1325 8.83669 16.8483C8.83669 16.5642 8.60752 16.3258 8.31419 16.3258Z"/><path d="M17.4166 7.68167C17.1233 7.59917 16.8208 7.5625 16.5 7.5625H5.49998C5.17915 7.5625 4.87665 7.59917 4.58331 7.68167C3.00665 8.09417 1.83331 9.53333 1.83331 11.2292V16.7292C1.83331 18.7458 3.48331 20.3958 5.49998 20.3958H16.5C18.5166 20.3958 20.1666 18.7458 20.1666 16.7292V11.2292C20.1666 9.53333 18.9933 8.09417 17.4166 7.68167ZM14.6666 12.1733V16.0417C14.6666 17.0867 13.8141 17.9392 12.7691 17.9392C11.7241 17.9392 10.8716 17.0867 10.8716 16.0417C10.8716 14.9967 11.7241 14.1442 12.7691 14.1442C12.9525 14.1442 13.1266 14.1808 13.2916 14.2267V13.0717L10.2208 13.9058V16.8483C10.2208 16.8575 10.2208 16.8667 10.2116 16.8758C10.2025 17.9117 9.34998 18.755 8.31415 18.755C7.26915 18.755 6.41665 17.9025 6.41665 16.8483C6.41665 15.7942 7.26915 14.9508 8.31415 14.9508C8.49748 14.9508 8.67165 14.9875 8.84581 15.0333V13.3833V11.9625C8.84581 11.1742 9.34081 10.5325 10.0925 10.3308L12.5216 9.66167C13.3008 9.45083 13.7958 9.6525 14.0708 9.86333C14.3458 10.0742 14.6666 10.4867 14.6666 11.3025V12.1733Z"/></svg>
const radioIcon = <svg className='app__nav-icon' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M7.10419 1.83333V4.58333H6.41669C6.17835 4.58333 5.94919 4.5925 5.72919 4.62916V1.83333C5.72919 1.45749 6.04085 1.14583 6.41669 1.14583C6.79252 1.14583 7.10419 1.45749 7.10419 1.83333Z"/><path d="M15.5833 4.58333H6.41665C6.17831 4.58333 5.94915 4.5925 5.72915 4.62916C3.36415 4.90416 1.83331 6.65499 1.83331 9.16666V15.5833C1.83331 18.3333 3.66665 20.1667 6.41665 20.1667H15.5833C18.3333 20.1667 20.1666 18.3333 20.1666 15.5833V9.16666C20.1666 6.41666 18.3333 4.58333 15.5833 4.58333ZM7.22331 14.6667C5.95831 14.6667 4.93165 13.64 4.93165 12.375C4.93165 11.11 5.95831 10.0833 7.22331 10.0833C8.48831 10.0833 9.51498 11.11 9.51498 12.375C9.51498 13.64 8.48831 14.6667 7.22331 14.6667ZM13.1816 14.8958H12.7233C12.3475 14.8958 12.0358 14.5842 12.0358 14.2083C12.0358 13.8325 12.3475 13.5208 12.7233 13.5208H13.1816C13.5575 13.5208 13.8691 13.8325 13.8691 14.2083C13.8691 14.5842 13.5575 14.8958 13.1816 14.8958ZM16.39 14.8958H15.9316C15.5558 14.8958 15.2441 14.5842 15.2441 14.2083C15.2441 13.8325 15.5558 13.5208 15.9316 13.5208H16.39C16.7658 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7658 14.8958 16.39 14.8958ZM16.39 11.2292H12.7233C12.3475 11.2292 12.0358 10.9175 12.0358 10.5417C12.0358 10.1658 12.3475 9.85416 12.7233 9.85416H16.39C16.7658 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7658 11.2292 16.39 11.2292Z"/></svg>
const videosIcon = <svg className='app__nav-icon' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.3125 7.205H1.83331V14.8408C1.83331 14.8958 1.83331 14.9508 1.84248 14.9967H10.3125V7.205Z"/><path d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z"/><path d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z"/><path d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z"/><path d="M16.2342 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2434 1.97084V5.80251C16.2434 5.81167 16.2342 5.82084 16.2342 5.83001Z"/><path d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0017 16.3717H16.2433V20.0292Z"/><path d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z"/><path d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z"/><path d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z"/><path d="M1.99835 16.3717C2.42919 18.3333 3.73085 19.6167 5.70169 20.02V16.3717H1.99835Z"/></svg>
const profileIcon = <svg className='app__nav-icon' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.83333C8.59831 1.83333 6.64581 3.78583 6.64581 6.1875C6.64581 8.54333 8.48831 10.45 10.89 10.5325C10.9633 10.5233 11.0366 10.5233 11.0916 10.5325C11.11 10.5325 11.1191 10.5325 11.1375 10.5325C11.1466 10.5325 11.1466 10.5325 11.1558 10.5325C13.5025 10.45 15.345 8.54333 15.3541 6.1875C15.3541 3.78583 13.4016 1.83333 11 1.83333Z"/><path d="M15.6567 12.9708C13.0992 11.2658 8.92836 11.2658 6.35253 12.9708C5.18836 13.75 4.54669 14.8042 4.54669 15.9317C4.54669 17.0592 5.18836 18.1042 6.34336 18.8742C7.62669 19.7358 9.31336 20.1667 11 20.1667C12.6867 20.1667 14.3734 19.7358 15.6567 18.8742C16.8117 18.095 17.4534 17.05 17.4534 15.9133C17.4442 14.7858 16.8117 13.7408 15.6567 12.9708Z"/></svg>
const logoutIcon = <svg className='app__nav-icon -ml-0.5' width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M11.465 20.1667C9.18934 20.1667 7.33335 18.3425 7.33335 16.0967L7.33335 11.7058L12.9293 11.7058C13.3303 11.7058 13.6474 11.3942 13.6474 11C13.6474 10.615 13.3303 10.2942 12.9293 10.2942L7.33335 10.2942V5.9125C7.33335 3.66667 9.18934 1.83333 11.4837 1.83333H16.0257C18.3107 1.83333 20.1667 3.6575 20.1667 5.90333V16.0875C20.1667 18.3425 18.3014 20.1667 16.0164 20.1667H11.465ZM5.00484 14.1623C4.72984 14.4465 4.28067 14.4465 4.00567 14.1715L1.329 11.504C1.19151 11.3665 1.11817 11.1923 1.11817 10.9998C1.11817 10.8165 1.19151 10.6332 1.329 10.5048L4.00567 7.83732C4.14317 7.69982 4.3265 7.62648 4.50067 7.62648C4.684 7.62648 4.86734 7.69982 5.00484 7.83732C5.27984 8.11232 5.27984 8.56148 5.00484 8.83648L3.53817 10.294H7.33317V11.7057H3.53817L5.00484 13.1631C5.27984 13.4381 5.27984 13.8873 5.00484 14.1623Z"/></svg>

const playIcon = <svg className='fill-[#efeee0] h-3 w-3 md:w-2 md:h-2' width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z"/></svg>
const previousIcon = <svg className='w-4 h-4 fill-white' width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path d="M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z"/><path d="M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z"/></svg>
const nextIcon = <svg className='w-[22px] h-[22px] md:w-4 md:h-4 fill-white' width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path d="M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z"/><path d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z"/></svg>
const repeatOneIcon = <svg className='w-4 h-4 fill-white' width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.77999 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z"/><path d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z"/><path d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z"/></svg>
const shuffleIcon = <svg className='w-4 h-4 fill-white' width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z"/><path d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z"/><path d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z"/></svg>

const volumeIcon = <svg className='w-[18px] h-[15px] fill-[#EFEEE0]' width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 12.5625C13.38 12.5625 13.2675 12.525 13.1625 12.45C12.915 12.2625 12.8625 11.91 13.05 11.6625C14.2275 10.095 14.2275 7.90499 13.05 6.33749C12.8625 6.08999 12.915 5.73749 13.1625 5.54999C13.41 5.36249 13.7625 5.41499 13.95 5.66249C15.42 7.62749 15.42 10.3725 13.95 12.3375C13.8375 12.4875 13.6725 12.5625 13.5 12.5625Z"/><path d="M14.8725 14.4375C14.7525 14.4375 14.64 14.4 14.535 14.325C14.2875 14.1375 14.235 13.785 14.4225 13.5375C16.425 10.8675 16.425 7.13249 14.4225 4.46249C14.235 4.21499 14.2875 3.86249 14.535 3.67499C14.7825 3.48749 15.135 3.53999 15.3225 3.78749C17.625 6.85499 17.625 11.145 15.3225 14.2125C15.2175 14.3625 15.045 14.4375 14.8725 14.4375Z"/><path d="M10.515 2.83501C9.675 2.37001 8.6025 2.49001 7.5075 3.17251L5.3175 4.54501C5.1675 4.63501 4.995 4.68751 4.8225 4.68751H4.125H3.75C1.935 4.68751 0.9375 5.68501 0.9375 7.50001V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55751C11.8125 4.26751 11.3475 3.30001 10.515 2.83501Z"/></svg>

const playAlbumIcon = <svg className='w-4 h-4 fill-primary' width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M7.00001 0.333313C10.6744 0.333313 13.6667 3.32415 13.6667 7.00384C13.6667 10.6758 10.6744 13.6666 7.00001 13.6666C3.32562 13.6666 0.333344 10.6758 0.333344 7.00384C0.333344 3.32415 3.32562 0.333313 7.00001 0.333313ZM6.24068 4.35325C6.09911 4.35325 5.96397 4.38541 5.83527 4.44973C5.6744 4.53978 5.5457 4.68128 5.47491 4.84851C5.42987 4.96428 5.35908 5.3116 5.35908 5.31804C5.2883 5.69752 5.24969 6.31498 5.24969 6.99676C5.24969 7.64703 5.2883 8.23812 5.34621 8.62403C5.35265 8.63047 5.42343 9.0614 5.50065 9.20934C5.64222 9.47948 5.91893 9.64671 6.21494 9.64671H6.24068C6.43373 9.64028 6.83913 9.47305 6.83913 9.46661C7.52125 9.18361 8.86616 8.30244 9.4067 7.71714L9.44531 7.67854C9.5161 7.60779 9.60619 7.49845 9.62549 7.47272C9.72845 7.33765 9.77993 7.17042 9.77993 7.00384C9.77993 6.81667 9.72202 6.64301 9.61262 6.50151C9.58688 6.47578 9.49036 6.36644 9.40027 6.27639C8.8726 5.71038 7.4955 4.78419 6.77478 4.50119C6.66539 4.45681 6.38868 4.35968 6.24068 4.35325Z"/></svg>
const addToCollectionIcon = <svg className='w-4 h-4 fill-primary' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M12.8067 10.0067C12.08 9.96002 11.3333 10.2267 10.78 10.78C9.74 11.82 9.74 13.5067 10.78 14.5534C11.1333 14.9067 11.5667 15.14 12.0267 15.2534C12.28 15.32 12.5467 15.34 12.8133 15.3267C13.4467 15.3 14.0667 15.0467 14.5533 14.56C15.24 13.8734 15.4733 12.9067 15.2533 12.0334C15.1467 11.5734 14.9067 11.14 14.5533 10.7867C14.0733 10.3 13.4467 10.04 12.8067 10.0067ZM14.16 12.6534C14.16 12.7934 14.1067 12.9134 14.0133 13.0067C13.92 13.1 13.8 13.1534 13.66 13.1534H13.1667V13.6734C13.1667 13.8134 13.1133 13.9334 13.02 14.0267C12.9267 14.12 12.8067 14.1734 12.6667 14.1734C12.3933 14.1734 12.1667 13.9467 12.1667 13.6734V13.1534H11.6667C11.3933 13.1534 11.1667 12.9267 11.1667 12.6534C11.1667 12.38 11.3933 12.1534 11.6667 12.1534H12.1667V11.68C12.1667 11.4067 12.3933 11.18 12.6667 11.18C12.94 11.18 13.1667 11.4067 13.1667 11.68V12.1534H13.66C13.94 12.1534 14.16 12.38 14.16 12.6534Z"/><path d="M8.15334 8.04669C7.88 8.04669 7.66 8.26669 7.66 8.54003C7.66 8.81336 7.88 9.03336 8.15334 9.03336C8.42667 9.03336 8.64667 8.81336 8.64667 8.54003C8.64667 8.26669 8.42667 8.04669 8.15334 8.04669Z"/><path d="M4.50667 8.70673C4.23334 8.70673 4.01334 8.92673 4.01334 9.20006C4.01334 9.47339 4.23334 9.69339 4.50667 9.69339C4.78 9.69339 5 9.47339 5 9.20006C5 8.92673 4.78 8.70673 4.50667 8.70673Z"/><path d="M10.7933 1.33331H5.20668C5.02001 1.33331 4.84001 1.33998 4.66668 1.36665C2.56668 1.55998 1.33334 2.96665 1.33334 5.20665V10.7933C1.33334 13.0333 2.56668 14.44 4.66668 14.6333C4.84001 14.66 5.02001 14.6666 5.20668 14.6666H9.00001C9.26001 14.6666 9.42668 14.3733 9.32668 14.1333C9.13334 13.6733 9.00001 13.14 9.00001 12.6666C9.00001 10.6466 10.6467 8.99998 12.6667 8.99998C13.1733 8.99998 13.6667 9.09998 14.12 9.29998C14.3667 9.40665 14.6667 9.23998 14.6667 8.97331V5.20665C14.6667 2.77998 13.22 1.33331 10.7933 1.33331ZM9.65334 5.36665V8.53998C9.65334 8.54665 9.64668 8.55331 9.64668 8.56665C9.63334 9.37998 8.97334 10.04 8.15334 10.04C7.32668 10.04 6.66001 9.36665 6.66001 8.54665C6.66001 7.71998 7.33334 7.05331 8.15334 7.05331C8.32668 7.05331 8.49334 7.08665 8.65334 7.14665V6.01998L6.00668 6.73998V9.20665C6.00668 9.21331 6.00001 9.21998 6.00001 9.22665C5.98668 10.04 5.32668 10.6933 4.50668 10.6933C3.68001 10.6933 3.01334 10.02 3.01334 9.19998C3.01334 8.37998 3.68668 7.70665 4.50668 7.70665C4.68001 7.70665 4.84668 7.73998 5.00001 7.79998V6.35998V5.19331C5.00001 4.57331 5.38668 4.07331 5.98001 3.91331L7.96668 3.36665C8.58668 3.19998 8.96668 3.36665 9.18001 3.52665C9.48668 3.75998 9.64001 4.13998 9.64001 4.64665V5.36665H9.65334Z"/></svg>
const playCollectionIcon = <svg className='w-10 h-10 fill-primary' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M40 20.0096C40 31.0275 31.0232 40 20 40C8.97683 40 0 31.0275 0 20.0096C0 8.9725 8.97683 0 20 0C31.0232 0 40 8.9725 40 20.0096Z"/><path d="M28 20.0097C28 20.5152 27.8409 21.0226 27.5227 21.4289C27.4631 21.5086 27.1847 21.8372 26.9659 22.051L26.8466 22.1677C25.1761 23.9388 21.0199 26.6022 18.9119 27.4557C18.9119 27.4751 17.6591 27.9825 17.0625 28H16.983C16.0682 28 15.2131 27.4965 14.7756 26.68C14.5369 26.2309 14.3182 24.9283 14.2983 24.9108C14.1193 23.7424 14 21.9538 14 19.9903C14 17.9315 14.1193 16.0632 14.3381 14.9162C14.3381 14.8967 14.5568 13.8469 14.696 13.497C14.9148 12.9934 15.3125 12.5638 15.8097 12.2916C16.2074 12.0991 16.625 12 17.0625 12C17.5199 12.0214 18.375 12.3111 18.7131 12.4471C20.9403 13.3026 25.196 16.1021 26.8267 17.8129C27.1051 18.0851 27.4034 18.4175 27.483 18.4933C27.821 18.921 28 19.4459 28 20.0097Z"/></svg>


export default {
  logo,
  heroVector,
  heroPerson,
  likesCircle01,
  likesCircle02,
  likesCircle03,
  likesCircle04,
  likesCircle05,
  chart01,
  chart02,
  chart03,
  release01,
  release02,
  release03,
  release04,
  release05,
  release06,
  release07,
  album01,
  heartIcon,
  heartAlbumIcon,
  heartIconWhite,
  heartIconRed,
  playlistIcon,
  radioIcon,
  videosIcon,
  profileIcon,
  logoutIcon,
  playIcon,
  previousIcon,
  nextIcon,
  repeatOneIcon,
  shuffleIcon,
  volumeIcon,
  playAlbumIcon,
  addToCollectionIcon,
  playCollectionIcon,
  construction
}