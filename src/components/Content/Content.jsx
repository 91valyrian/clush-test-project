import PageTitle from './PageHeader/PageTitle';
import SearchFilter from './PageHeader/SearchFilter';
import BoardList from './Board/BoardList';


const Content = () => {
    return (
        <div className="content">
            <div className="pageHeader">
                <PageTitle />
                <SearchFilter />
            </div>
            <div className="board">
                <BoardList />
            </div>
        </div>
    );
};
export default Content;