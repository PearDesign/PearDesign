import React, { Component } from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { ProjectTile } from './ProjectTile';

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar />
        <Header />
        <div class="Home__Services">
          Whether we're coding, campaigning, doodling or daydreaming, our focus is helping clients navigate the digital world.
        </div>
        <div class="Home__Projects">
        <div class="Home__ProjectsIntro">
            <h3>Our Work</h3>
            <p>Over the past several years, we've helped dozens of organizations make sense of today's digital landscape. And we're just getting started.</p>
          </div>
          <div class="Home__ProjectsGrid">
            <ProjectTile
              image="https://placekitten.com/900/900"
              title="Test Project Title 1"
              tag="Website"
            />
            <ProjectTile
              image="https://placekitten.com/900/900"
              title="Test Project Title 2"
              tag="Website"
            />
            <ProjectTile
              image="https://placekitten.com/900/900"
              title="Test Project Title 3"
              tag="Website"
            />
            <ProjectTile
              image="https://placekitten.com/900/900"
              title="Test Project Title 4"
              tag="Website"
            />
          </div>
        </div>
      </div>
    );
  }
}
