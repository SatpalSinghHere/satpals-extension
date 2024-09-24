import "./style.css";
import ReactDOM from "react-dom/client";
import MagicWand from "./components/MagicWand.tsx";
import Overlay from "./components/Overlay.tsx";
import ChatBox from "./components/ChatBox.tsx";


//   matches: ["*://*/*"],
//   cssInjectionMode: "ui",

//   async main(ctx) {
//     const ui = await createShadowRootUi(ctx, {
//       name: "wxt-react-example",
//       position: "inline",
//       anchor: ".Ne6nSd",
//       append: "first",
//       onMount: (container) => {
//         // Don't mount react app directly on <body>
//         const wrapper = document.createElement("div");
//         container.append(wrapper);

//         const root = ReactDOM.createRoot(wrapper);
//         root.render(<App />);
//         return { root, wrapper };
//       },
//       onRemove: (elements) => {
//         elements?.root.unmount();
//         elements?.wrapper.remove();
//       },
//     });

//     const checkAnchor = setInterval(() => {
//       const targetAnchor = document.querySelector('.Ne6nSd');
//       if (targetAnchor) {
//         console.log(targetAnchor)
//         ui.mount();
//         clearInterval(checkAnchor)
//       }

//       }, 200)


//   },
// });

export default defineContentScript({
  matches: ['*://*.linkedin.com/messaging/thread/*'],
  cssInjectionMode: "ui",

  async main(ctx) {

    const magicWand = await createShadowRootUi(ctx, {
      name: "magic-wand",
      position: "inline",
      anchor: ".msg-form__contenteditable",
      append: "last",
      onMount: (container) => {
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(<MagicWand />);
        return { root, wrapper };
      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();

        console.log("wand has been removed");
      },
    });

    const chatBox = await createShadowRootUi(ctx, {
      name: "chat-box",
      position: "inline",
      anchor: "body",
      append: "last",
      onMount: (container) => {
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const removeChatHandler = () => {
          chatBox.remove();
          chatOverlay.remove()
        }

        const root = ReactDOM.createRoot(wrapper);
        root.render(<ChatBox removeChatHandler={removeChatHandler} />);
        return { root, wrapper };

      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();

        console.log("chat-box removed");
      },
    });

    const chatOverlay = await createShadowRootUi(ctx, {
      name: "chat-overlay",
      position: "inline",
      anchor: "body",
      append: "last",
      onMount: (container) => {
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const clickRemover = () => {
          chatOverlay.remove();
          chatBox.remove();
        }

        chatBox.mount();

        wrapper.addEventListener('click', () => {
          clickRemover();
        })

        const root = ReactDOM.createRoot(wrapper);
        root.render(<Overlay />);
        return { root, wrapper };
      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();

        console.log("chat-overlay removed");
      },
    });



    
    const checkMessageBox = setInterval(() => {
      const anchor = document.querySelector('.msg-form__contenteditable')

      if (anchor && !anchor.querySelector('magic-wand')) {

        function mountMagicWand(){
          magicWand.mount();
        }
        function removeMagicWand(){
          magicWand.remove();
        }
        anchor.removeEventListener("focus", mountMagicWand)
        anchor.removeEventListener("blur", removeMagicWand)

        anchor.addEventListener("focus", mountMagicWand)
        anchor.addEventListener("blur", removeMagicWand)
      }

      const wand = document.querySelector('magic-wand')
      if (wand) {
        wand.addEventListener('click', () => {
          if (!document.querySelector('chat-overlay'))
            chatOverlay.mount();

        })
        clearInterval(checkMessageBox)
      }

      

    }, 700);






  }
})


