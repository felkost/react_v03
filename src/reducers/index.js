import { combineReducers } from 'redux';
import layouts from './ContentCreator/layouts';
import textpanels from './ContentCreator/textpanels';
import toolbar from './ContentCreator/toolbar';
import auth from './Auth/auth';
import campaigns from './Campaigns/campaigns';
import slides from './Campaigns/slides';

export default combineReducers({
    auth,    
    layouts,
    textpanels,
    toolbar,
    campaigns,
    slides
});