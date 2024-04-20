import Header from '../components/Header/Header';
import MainContent from '../components/Main/MainContent';
import QuickAccess from '../components/Quick-Access/QuickAccess';
import RecentItems from '../components/RecentItems/RecentItems';
import RightSection from '../components/RightSection/RightSection';
import SearchBar from '../components/Search/SearchBar';
import IconButtons from '../components/Small/IconBtns/IconButtons';
import Separator from '../components/Small/Separator/Separator';
import Profile from '../components/UserProfile/Profile';
import Widgets from '../components/Widgets/Widgets';

export default function Home() {
  return (
    <>
      <MainContent>
        <Header>
          <SearchBar />
          <IconButtons />
        </Header>
        <Separator content='Quick Access' />
        <QuickAccess />
        <Separator content='Recent Items' />
        <RecentItems />
      </MainContent>
      <RightSection>
        <Profile />
        <Widgets />
      </RightSection>
    </>
  );
}
