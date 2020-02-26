import Head from 'next/head';

export default function Layout(props) {
  return (
    <section>
      <Head>
        <title>Barely Human</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {props.children}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          html,
          body {
            font-family: 'Exo 2', sans-serif;
            background: #fff;
          }

          section {
            overflow: hidden;
            position: relative;
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          section .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 90%;
          }

          ul {
            box-sizing: border-box;
            /* box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); */
            padding: 25px;
            text-align: left;
            list-style-type: none;
            /* border-radius: 5px; */
          }

          ul li,
          ul li a {
            text-decoration: none;
            line-height: 20px;
            font-size: 14px;
            color: #999;
            padding: 8px 0px;
          }

          ul li a:hover {
            color: black;
            cursor: pointer;
          }

          .flex {
            display: flex;
          }

          .card-border {
            border: 1px solid #999;
            border-radius: 5px;
            min-width: 250px !important;
            max-width: 100%;
          }

          .button {
            -webkit-appearance: none;
            position: relative;
            display: inline-block;
            vertical-align: middle;
            text-transform: uppercase;
            text-align: center;
            line-height: 28px;
            white-space: nowrap;
            min-width: 135px;
            height: 28px;
            font-weight: 500;
            font-size: 12px;
            flex-shrink: 0;
            color: rgb(255, 255, 255);
            background-color: rgb(37, 41, 46);
            user-select: none;
            cursor: pointer;
            text-decoration: none;
            padding: 0px 25px;
            border-radius: 5px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(37, 41, 46);
            border-image: initial;
            transition: all 0.2s ease 0s;
            overflow: hidden;
            outline: none;
          }

          .button:hover {
            background: white;
            border: 1px solid black;
            color: black;
          }

          .action-link {
            color: #999;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
          }

          .action-link:hover {
            color: black;
            cursor: pointer;
          }

          .font-size-50 {
            font-size: 50px;
          }

          .font-size-30 {
            font-size: 30px;
          }

          .font-size-17 {
            font-size: 17px;
          }

          .font-size-15 {
            font-size: 15px;
          }

          .margin-sm {
            margin: 8px;
          }

          .margin-bottom-sm {
            margin-bottom: 8px;
          }

          .margin-top-sm {
            margin-top: 8px;
          }

          .margin-md {
            margin: 16px;
          }

          .margin-lg {
            margin: 32px;
          }

          .margin-left-auto {
            margin-left: auto;
          }

          .tagline {
            text-align: center;
            color: #999;
          }

          .align-start {
            align-self: flex-start;
          }

          .min-width-150-px {
            min-width: 150px;
          }

          .padding-25-px {
            padding: 25px;
          }

          .max-width-500-px {
            max-width: 500px;
          }

          .dark-gray {
            color: #333;
          }

          .line-height-20-px {
            line-height: 20px;
            font-size: 14px;
          }

          .button.back-button {
            border: 0;
            background: white;
            color: black;
            min-width: auto;
            border-radius: 0;
            padding: 0px;
            color: #999;
            display: inline-block;
            vertical-align: middle;
          }

          .button.back-button::before {
            content: ' < ';
            vertical-align: middle;
          }

          .button.back-button:hover {
            color: black;
            cursor: pointer;
          }

          .just-space-between {
            justify-content: space-between;
          }

          .just-center {
            justify-content: center;
          }

          .flex-wrap {
            flex-wrap: wrap;
          }

          .text-center {
            text-align: center;
          }

          .button.black.outline-btn {
            border: 1px solid black;
            background: transparent;
            color: black;
          }

          .button.black.outline-btn:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }

          .accent {
            color: #50a586;
          }

          .width-50 {
            width: 50%;
          }

          .flex {
            display: flex;
          }

          .flex-col {
            flex-direction: column;
          }

          .h-center {
            justify-content: center;
          }

          .v-center {
            align-items: center;
          }
        `}
      </style>
    </section>
  );
}
