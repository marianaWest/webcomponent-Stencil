import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mwest-artist-card',
  styleUrl: 'mwest-artist-card.css',
  shadow: true,
})
export class MWestArtistCard {
  @Prop() firstName: string = '';
  @Prop() lastName: string = '';
  @Prop() photo: string = '';
  @Prop() resume: string = '';
  @Prop() role: string = 'engineer';

  render() {
    return (
      <div class="b-personal-card-box">
        <div class="b-personal-card">
          <div class="b-personal-card__content">
            <div class="b-personal-card__photo-container">
              <img class="b-personal-card__photo" 
              src={this.photo} 
              alt="Mariana Westphalen"></img>
            </div>
            <h2 class="b-personal-card__full-name">
            {this.firstName} {this.lastName}
            </h2>
            <h3>{this.role}</h3>

            <div class="b-personal-card__resume">
              <p>Eu sou astrólogo, vocês precisam acreditar em mim.</p>
            </div>

            <div class="b-personal-card__resume">
              {this.resume}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
