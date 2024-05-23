import icon from '../images/placeholder_images/village.png';
import '../styles/styles.css';
import { addEventsToSkillsList } from './skills/addEventToSkills';

document.querySelector('.image__icon').src = icon;

addEventsToSkillsList();
