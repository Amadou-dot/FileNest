import SignOut from './components/Small/Buttons/SignOut/SignOut';
import SideBar from './components/SideBar/SideBar';
import LeftSection from './components/LeftSection/LeftSection';
import MainContent from './components/Main/MainContent';
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import IconButtons from './components/Small/IconBtns/IconButtons';
import QuickAccess from './components/Quick-Access/QuickAccess';
import RecentItems from './components/RecentItems/RecentItems';
import RightSection from './components/RightSection/RightSection';
import Profile from './components/UserProfile/Profile';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <>
      <LeftSection>
        <SideBar />
        <SignOut />
      </LeftSection>
      <MainContent>
        <Header>
          <SearchBar />
          <IconButtons />
        </Header>
        <h3 className='separator'>Quick Access</h3>
        <QuickAccess />
        <h3 className='separator'>Recent</h3>
        <RecentItems />
      </MainContent>
      <RightSection>
        <Profile />
        <Widgets />
      </RightSection>
    </>
  );
}

export default App;
