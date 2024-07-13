import React, { useEffect } from "react";
import { Grid, Button, Link, useTheme } from "@mui/material";
import tapps from "@/assets/tapps.png";

const Home = () => {
  const theme = useTheme();
  console.log(Telegram);

  const handleLaunchAlert = () => {
    Telegram.WebApp.showAlert("Hello World!");
  };

  const showPopup = () => {
    Telegram.WebApp.showPopup(
      {
        title: "Title",
        message: "Some message",
        buttons: [
          { id: "link", type: "default", text: "Open ton.org" },
          { type: "cancel" },
        ],
      },
      function (btn: string) {
        if (btn === "link") {
          Telegram.WebApp.openLink("https://ton.org/");
        }
      },
    );
  };

  const expand = () => {
    Telegram.WebApp.expand();
  };

  const toggleMainButton = () => {
    if (Telegram.WebApp.MainButton.isVisible) {
      Telegram.WebApp.MainButton.hide();
    } else {
      Telegram.WebApp.MainButton.show();
    }
  };

  useEffect(() => {
    // Init TWA
    Telegram.WebApp.ready();

    // Event occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
    Telegram.WebApp.onEvent("themeChanged", function () {
      document.documentElement.className = Telegram.WebApp.colorScheme;
    });

    // Show main button
    Telegram.WebApp.MainButton.setParams({
      text: "Main Button",
    });
    Telegram.WebApp.MainButton.onClick(function () {
      Telegram.WebApp.showAlert("Main Button was clicked");
    });
    Telegram.WebApp.MainButton.show();

    function setViewportData() {
      const sizeEl = document.getElementById("viewport-params-size");
      if (sizeEl) {
        sizeEl.innerText =
          "width: " +
          window.innerWidth +
          " x " +
          "height: " +
          Telegram.WebApp.viewportStableHeight;
      }

      const expandEl = document.querySelector("#viewport-params-expand");
      if ((expandEl as any)?.innerText) {
        (expandEl as any).innerText =
          "Is Expanded: " + (Telegram.WebApp.isExpanded ? "true" : "false");
      }
    }

    Telegram.WebApp.setHeaderColor("secondary_bg_color");

    setViewportData();
    Telegram.WebApp.onEvent("viewportChanged", setViewportData);

    Telegram.WebApp.onEvent("themeChanged", function () {
      document.body.setAttribute(
        "style",
        "--bg-color:" + Telegram.WebApp.backgroundColor,
      );
    });
  }, []);

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{
        height: "85vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Link href='https://ton.org/'>
        <img width='48' src={tapps} alt='logo of telegram web apps' />
      </Link>
      <h1 style={{ color: theme.palette.text.primary }}>Models</h1>
      <Grid container gap={2} justifyContent={"center"}>
        <Button onClick={handleLaunchAlert}>Launch Alert</Button>
        <Button onClick={showPopup}>Launch Popup</Button>
      </Grid>
      <h1 style={{ color: theme.palette.text.primary }}>Links</h1>
      <ul>
        <li>
          <a href="javascript:Telegram.WebApp.openTelegramLink('https://t.me/trendingapps');">
            Open link within Telegram
          </a>
        </li>
        <li>
          <a href="javascript:Telegram.WebApp.openLink('https://ton.org/');">
            Open link in external browser
          </a>
        </li>
        <li>
          <a href="javascript:Telegram.WebApp.openLink('https://telegra.ph/api',{try_instant_view:true});">
            Open link inside Telegram webview
          </a>
        </li>
      </ul>

      <h1 style={{ color: theme.palette.text.primary }}>Buttons</h1>
      <Button onClick={expand}>Expand Webview</Button>
      <Button onClick={toggleMainButton}>Toggle Main Button</Button>
    </Grid>
  );
};

export default React.memo(Home);
