/*
* You are now retarded.
*
* I am not responsible for bricked brains, dead usb sticks,
* or you getting fired because your pc opened 2 seconds slower. Please
* do some research if you have any concerns about features included in this software
* before installing it! YOU are choosing to make these modifications, and if
* you point the finger at me for messing up your pc, I will laugh at you. 
*/

import { Plugin } from '@vizality/entities';
import { getModule } from "@vizality/webpack";
import { patch, unpatch } from "@vizality/patcher"


export default class amogus extends Plugin {
  start () {
      const Message = getModule(m => m.type && m.type.displayName === 'MessageContent')
      console.log(Message)
      patch('dababypng', Message, 'type', (args, res) => {
      const img = document.getElementsByTagName("img")
      for (let i = 0; i < img.length; i++) {
        const element = img[i];
        element.setAttribute("src", "https://cdn.discordapp.com/attachments/803993444917051404/825696810307289138/dababy.png")
      }
      const video = document.getElementsByTagName("video")
      for (let i = 0; i < video.length; i++) {
        const element = video[i];
        if (element.getAttribute("src") != "https://cdn.discordapp.com/attachments/803993444917051404/825697846435119124/Dababy_car.mp4") {
        element.setAttribute("src", "https://cdn.discordapp.com/attachments/803993444917051404/825697846435119124/Dababy_car.mp4")
        }
      }
        res.props.children[0] = "lesgooo" 
        const username = document.getElementsByClassName("username-1A8OIy")
        for (let i = 0; i < username.length; i++) {
          const element = username[i];
          element.innerHTML = "DaBaby"
        }
        return res;
      })
  }

  stop () {
    unpatch('dababypng')
  }
}
