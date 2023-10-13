function LinkButtons () {
  return (
    <>
      <div className="flex longLinks linkButtonDiv">
        <a
          href="https://marsbarnes.github.io/Portfolio/"
          className="btn btn-primary linkButtons"
        >
          To Mars' Portfolio
        </a>
        <a
          href="https://github.com/MarsBarnes/commerceApp_frontEnd"
          className="btn btn-primary linkButtons"
        >
          To Front End GitHub Repository
        </a>
        <a
          href="https://github.com/MarsBarnes/commerceApp_backEnd"
          className="btn btn-primary linkButtons"
        >
          To Back End GitHub Repository
        </a>
      </div>
      <div className="flex shortLinks linkButtonDiv">
        <a
          href="https://marsbarnes.github.io/Portfolio/"
          className="btn btn-primary linkButtons"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/MarsBarnes/commerceApp_frontEnd"
          className="btn btn-primary linkButtons"
        >
          Front Repo
        </a>
        <a
          href="https://github.com/MarsBarnes/commerceApp_backEnd"
          className="btn btn-primary linkButtons"
        >
          Back Repo
        </a>
      </div>
    </>
  );
}

export default LinkButtons;