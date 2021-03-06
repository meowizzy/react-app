import FolderList from '../folders.json';

function Folders({activeIndex, handleClickFolder}) {

    const onClickFolderItem = (event, currentIndex) => {
        event.preventDefault();

        handleClickFolder(currentIndex);
    };

    return (
        <nav className="folders">
            <ul className="folders__list">
                {
                FolderList.map((value, key) => 
                    (<li key={value.folderId} className={activeIndex === key ? "folders__item active" : "folders__item"}>
                        <a href={value.folderAlias} onClick={(event) => onClickFolderItem(event, key)}>{value.folderName}</a>
                    </li>))
                }
            </ul>
        </nav>
    );
}

export default Folders;