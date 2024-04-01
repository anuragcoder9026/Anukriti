const defaultContent=["Title: The Forgotten Diary\nOnce upon a time, in a small village nestled between rolling hills and lush green forests, there lived a young girl named Lily. Lily was an adventurous soul, always eager to explore the mysteries hidden within the nooks and crannies of her village. One sunny afternoon, while rummaging through the attic of her old family home, she stumbled upon a dusty old diary tucked away in a forgotten corner.Intrigued by the discovery, Lily blew off the dust and opened the diary to reveal its contents. The pages were yellowed with age, and the ink had faded, but the words penned on them still held a certain allure. The diary belonged to a girl named Emily, who lived in the same village centuries ago. As Lily delved deeper into the diary, she found herself transported back in time to an era of horse-drawn carriages and candlelit streets.Emily's entries spoke of a forbidden love affair with a young poet from a neighboring village. Their love was as tumultuous as it was passionate, and they often met in secret beneath the moonlit sky. But their happiness was short-lived, for their romance was frowned upon by society, and their families forbade them from seeing each other.As Lily read on, she became enthralled by Emily's story, feeling as though she were living it herself. She could sense the longing in Emily's words, the ache of a heart torn between love and duty. But just as she reached the climax of the tale, the diary abruptly ended, leaving Lily hanging on the edge of a cliff, desperate for resolution.Determined to uncover the truth, Lily embarked on a quest to unravel the mystery surrounding Emily's disappearance. Armed with nothing but the diary and her insatiable curiosity, she scoured the village for clues, questioning the elders and scouring the archives for any mention of Emily and her lover.As days turned into weeks and weeks turned into months, Lily's obsession with Emily's story consumed her every waking moment. She neglected her chores and ignored her friends, her mind fixated on the enigma of the forgotten diary. But just when she was on the verge of giving up hope, fate intervened in the most unexpected way.One stormy night, as Lily lay tossing and turning in bed, unable to shake the haunting images of Emily's lost love from people..",]

import { createSlice } from "@reduxjs/toolkit";

const contentSlice=createSlice({
      name:'contentArray',
      initialState:defaultContent,
      reducers:{
        handleContentArray:(state,action)=>{
          return ([...state,action.payload]);
        },
        handleDeleteContent:(state,action)=>{
          let newState=state.filter((_,index)=>index!==action.payload);
            return newState;
        }
      }
})

export const contentAction=contentSlice.actions;
export default contentSlice;