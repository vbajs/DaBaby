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
import { getModule } from '@vizality/webpack';
import { patch, unpatchAll } from '@vizality/patcher';


export default class dababy extends Plugin {
  start () {
    $vz.commands.registerCommand({
      command: 'dababy',
      description: 'lesgooo',
      executor: () => {
        return {
          send: false,
          result: {
            // eslint-disable-next-line no-undef
            const: Toast = vizality.api.notifications.sendToast({
              header: 'DaBaby',
              content: 'I will turn a discord rebrand into a convertibile',
              icon: {
                url: 'https://cdn.discordapp.com/attachments/803993444917051404/842774092411174942/convertibile.png',
                size: '512'
              },
              showCloseButton: false,
              autoClose: false,
              buttons: [
                {
                  text: 'lesgooo',
                  color: 'green'
                }
              ]
            })
          }
        };
      }
    });

    const Message = getModule(m => m.type && m.type.displayName === 'MessageContent');
    console.log(Message);
    patch('dababypng', Message, 'type', (_args, res) => {
      const img = document.getElementsByTagName('img');
      for (let i = 0; i < img.length; i++) {
        const element = img[i];
        element.setAttribute('src', 'https://cdn.discordapp.com/attachments/803993444917051404/825696810307289138/dababy.png');
      }
      const video = document.getElementsByTagName('video');
      for (let i = 0; i < video.length; i++) {
        const element = video[i];
        // eslint-disable-next-line eqeqeq
        if (element.getAttribute('src') != 'https://cdn.discordapp.com/attachments/803993444917051404/825697846435119124/Dababy_car.mp4') {
          element.setAttribute('src', 'https://cdn.discordapp.com/attachments/803993444917051404/825697846435119124/Dababy_car.mp4');
        }
      }
      res.props.children[0] = 'lesgooo';
      const username = document.getElementsByClassName('username-1A8OIy');
      for (let i = 0; i < username.length; i++) {
        const element = username[i];
        element.innerHTML = 'DaBaby';
      }
      const rolecolor = document.getElementsByClassName('roleColor-rz2vM0');
      for (let i = 0; i < rolecolor.length; i++) {
        const element = rolecolor[i];
        element.innerHTML = 'DaBaby';
      }
      const channelname = document.getElementsByClassName('channelName-2YrOjO');
      for (let i = 0; i < channelname.length; i++) {
        const element = channelname[i];
        element.innerHTML = 'lesgooo';
      }
      const guildname = document.getElementsByClassName('name-1jkAdW');
      for (let i = 0; i < guildname.length; i++) {
        const element = guildname[i];
        element.innerHTML = 'DaBabyCord';
      }
      const currentchannelname = document.getElementsByClassName('title-29uC1r base-1x0h_U size16-1P40sf');
      for (let i = 0; i < currentchannelname.length; i++) {
        const element = currentchannelname[i];
        element.innerHTML = 'lesgooo';
      }
      document.addEventListener('click', () => {
        const audio = new Audio('https://cdn.discordapp.com/attachments/803993444917051404/825720198627459092/lesgoo.mp3');
        audio.play();
      });
      return res;
    });
  }

  stop () {
    unpatchAll('dababypng');
    setTimeout(() => window.location.reload(), 2000);
  }
}
