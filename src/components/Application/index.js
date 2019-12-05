import React, { Component } from "react";
import axios from "axios";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: null
    };
  }

  getApplications = () => {
    this.setState({ loading: true });

    axios
      .get("https://a.anardoni.com/packs/wEMzqYQA?population=_applications")
      .then(res => {
        this.setState({ applications: res.data._applications });
        // this.setState({ loading: false });
        // console.log(this.state.nerkh);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
        // this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.getApplications();
  }

  render() {
    const { applications } = this.state;

    if (!applications) return <div className="container">loading</div>;

    return (
      <div
        className="container"
        style={{ direction: "rtl", textAlign: "right" }}
      >
        <div className="row">
          {applications.map(app => {
            return (
              <div className="col-4">
                <div class="card mb-4" style={{ width: "18rem" }}>
                  <img
                    src={`https://s.anardoni.com/${app.photos.icon.path}`}
                    class="card-img-top"
                    alt={app.name}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{app.name}</h5>
                    <p class="card-text">{app.content.subtitle}</p>
                    <a
                      href={`https://anardoni.com/ios/app${app.id}`}
                      class="btn btn-primary"
                    >
                      ادامه مطلب
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Application;
