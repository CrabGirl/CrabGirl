import React from 'react';
import BackButton from '../../components/backButton';
import annie from '../../../assets/images/annie.png';
import crad from '../../../assets/images/crad.png';
import dad from '../../../assets/images/dad.png';
import jack from '../../../assets/images/jack2.png';
import mom from '../../../assets/images/mom.png';
import CharactersStyle from './Characters.style';

function Characters() {
  return (
    <CharactersStyle className="standard-page" id="characters-page">
      <BackButton/>
      <div className="content-section">
        <div className="border-box title">
          <div className="text">Characters</div>
        </div>
      </div>
      <div className="content-section character-section">
        <div className="border-box character-bio">
          Annie Lane. A sassy 12-year-old-girl with a giant red crab claw arm. A little on the short side, with straight, choppy dark brown hair and tan skin, she prefers comfort and practicality over style (especially since she has to rip open her shirts and place buttons down one side just to make her claw fit). Two-thirds human and one-third crab, Annie is just barely getting a hold on what truly makers her, well, her. She grew up with a hard-working, single mother in a splice-friendly neighborhood in Topeka, Kansas (the bane of her existence). As the only cold-blooded splice in her zoological hybrid school, she's one-of-a-kind, and not in a good way. Annie is constantly talking herself up and finding herself too afraid to actually do anything about it. The only point of calm in her storm of a life is her neighbor and best-friend Jack, who keeps her temper down and makes life a little less sucky. She’s independent, sharp, and determined to figure things out whether her mom wants her to or not.
        </div>
        <div className="border-box character-photo">
          <img src={annie}/>
        </div>
      </div>
      <div className="content-section character-section">
        <div className="border-box character-photo">
          <img src={jack}/>
        </div>
        <div className="border-box character-bio">
          Jack Coney. Annie’s part-rabbit BFF. He is lean and pale with thin bunny-bones, large eyes, super fluffy hair in shades of black, grey and white, a twitchy bunny nose and giant feet. He lives next door to Annie, who moved in 8 years ago, and has always found her splice to be the epitome of awesomeness--it's a giant weapon she's allowed to bring anywhere she wants. What could be cooler than that? Jack already embraces the bunny part of himself and the extra energy and jumping skills it brings to the table, and feels confident in who he is, even if that includes being a jumpy scaredy-cat with bunny-like features that get him labeled “adorable” by random passersby. He is the middle child in a set of duodecaplets and spends as much time as he can at Annie's house to get a break from the chaos of his own household, not that his parents ever notice. How could they with so many kids? He's fiercely loyal, level-headed, and tender-hearted to a point where Annie has a tendency to trample his feelings and take him for granted (not that he'd ever say that aloud).
        </div>
      </div>
      <div className="content-section character-section">
        <div className="border-box character-bio">
          King Crab + Dad. The source of her crab DNA and the only father Annie has ever known. Likes to blow bubbles and scurry around his cage. He is estimated to be 13 years old, which means he has a few years left on his lifespan. While not even remotely aware of what Annie is saying to him, he does come to her claw when she puts it in his cage and finds himself in the role of Annie's confidant more often than not.
        </div>
        <div className="border-box character-photo">
          <img src={crad}/>
        </div>
      </div>
      <div className="content-section character-section">
        <div className="border-box character-photo">
          <img src={mom}/>
        </div>
        <div className="border-box character-bio">
          Cali Lane. Dark haired with deeply tan skin, much like Annie, Cali's hair is wavy and smooth, and her face soft. She is a marine biologist who grew up wanting to save the world until she had Annie. Now, she’s willing to give up everything to keep her daughter safe, even if that means keeping secrets. She often works double-shifts at the Aquarium to provide for Annie and replace all the things her crab claw breaks, but she understands. While others think Annie's claw is off-putting, she loves every bit of her daughter and wishes Annie could see that, too. Annie's stories of bullying at school bring her heartache, but she prefers to play the peace-maker whenever possible and save her strength to fight for when it really matters.
        </div>
      </div>
      <div className="content-section character-section">
        <div className="border-box character-bio">
          Andrew Clawson. Brown-haired and peachy skinned, he is a brilliant (and near-sighted) geneticist and micro-biologist who knows more about caring for crabs than children. He never gave up his dream to save humanity, but somehow lost some of his own in the process. He knows about Annie and has been looking for her all these years.
        </div>
        <div className="border-box character-photo">
          <img src={dad}/>
        </div>
      </div>
      <div className="content-section">
        <div className="border-box title synopsis-title">
          <div className="text">Synopsis</div>
        </div>
      </div>
      <div className="content-section synopsis">
        <div className="border-box">
          <div>In a community of animal-spliced children, twelve-year-old ANNIE LANE is the only kid around whose mixed with cold-blooded DNA, and she hates it. After her giant crab arm creates trouble at school, she asks her mother why she was spliced with crustacean blood and who her DNA dad is. Her single-mother shuts her down and says there’s no record of him. Annie learns at school that there legally has to be and snoops around until she finds her dad’s name, ANDREW CLAWSON, and a Zooborg Donation Center in Maine among legal papers in her mom’s closet.</div>
          <div>Feeling betrayed, she and Jack take CRAD, her six-pound crab dad, and leave in the night.</div>
          <div>To get to Maine faster, she and Jack sneak onto an ice cream truck. Annie does her best to keep Crad warm but freezes up because of her splice and, feeling like a failure, slips into hibernation mode while Jack panics. Annie wakes up disoriented in a hospital bed with Jack nowhere in sight. She looks for a way out and meets a cancer patient named KATIE who isn’t bothered by her splice. Katie helps her escape and they learn she’s the only cold-blooded splice to have ever survived birth. Annie accidentally scratches Katie with her claw. They dodge the security officers and meet up with Jack. People in the restaurant look at her suspiciously and give her a wide berth. Katie gives them a cell phone to keep in touch and insists her scratch is fine.</div>
          <div>She and Jack hail a rideshare car but are passed by several times. Finally, a driver picks them up only to talk about her love for crab meat. She calls spliced children creatures. Upset, Annie and Jack jump from the car early. Near The Great Lake, they steal a boat to cross. Annie has a memory about a man in a white coat. A storm hits and they run into a crabbing boat. The crabbers sail over to grab Annie, but Crad pinches a crabber’s face and saves them. Crad flings into the water. Heartbroken, Annie wants to scour the bottom of the lake to find her dad. Jack convinces her to move on and let Crad be with his own kind. She wonders who her own kind is. Annie has another memory about the man in the white coat.</div>
          <div>They arrive at the Zooborg Donation Center in Maine and sneak inside. She sees a glimpse of her dad. She ignores Jack’s warnings and presents herself to her DNA dad alone. Clawson reveals that her mother stole her away as a child and that she has healing blood. She asks to call her mom to sort everything out, but her dad refuses. Her mom and Jack show up outside the facility but her father locks her up in a room he made for her long ago.</div>
          <div>Annie realizes she has to accept the crab part of herself to get free. She uses the strength of her splice to break a glass aquarium wall and saves Jack who’s drowning on the other side. Before escaping, her dad reveals that Katie is dying because of her scratch and Annie’s blood is the only thing that can save her. He will make the blood into a cure as long as she promises to stay forever. Annie’s mom and Jack beg her to come home, but Annie can’t let Katie die and chooses to stay. Her DNA dad straps her into a machine to take some of her blood, and Annie realizes there’s another way. She pulls herself free and pincers through the shoulder of her pain-free claw, leaving it and it’s special DNA behind. She escapes, one-armed, with her mother and Jack.</div>
          <div>Annie keeps tabs with Katie who makes a full recovery after a mysterious blood donation, and her claw starts regrowing, just like a crab’s would. But she knows she doesn’t need it to feel whole.</div>
        </div>
      </div>
    </CharactersStyle>
  );
}

export default Characters;
