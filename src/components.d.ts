/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MwestArtistCard {
        "artwork": string;
        "artworkTitle": string;
        "firstName": string;
        "lastName": string;
        "photo": string;
        "resume": string;
        "role": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMwestArtistCardElement extends Components.MwestArtistCard, HTMLStencilElement {
    }
    var HTMLMwestArtistCardElement: {
        prototype: HTMLMwestArtistCardElement;
        new (): HTMLMwestArtistCardElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "mwest-artist-card": HTMLMwestArtistCardElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MwestArtistCard {
        "artwork"?: string;
        "artworkTitle"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "photo"?: string;
        "resume"?: string;
        "role"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "mwest-artist-card": MwestArtistCard;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mwest-artist-card": LocalJSX.MwestArtistCard & JSXBase.HTMLAttributes<HTMLMwestArtistCardElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}