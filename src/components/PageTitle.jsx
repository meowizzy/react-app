function PageTitle(props) {
    const { Title, className } = props;
    return (
        <div className={className ? 'page-title ' + className : 'page-title'}>
          <h1>{Title}</h1>
        </div>  
    );
}

export default PageTitle;