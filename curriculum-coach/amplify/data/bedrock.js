export function request(ctx) {
  //add parameters to function header
  const { input = [] } = ctx.args;

  let firstName = "David";
  let lastName = "Song";
  let gradeLevel = "3rd";
  let learningDisorder = "Autism";
  let english = "Reading comprehension and writing are challenging; shows some improvement with regular practice and support"
  let math = "Struggles with understanding abstract concepts and word problems; benefits from visual aids and hands-on activities"
  let science = "Difficulty grasping scientific concepts, but shows interest and some understanding when using interactive sessions"
  let history = "Struggles with understanding historical concepts and timelines; recalls some key events with the help of visual aids"
  let art = "Participates enthusiastically and enjoys creative activities, though detailed work is challenging due to fine motor skill difficulties"
  let otherNotes = "Faces significant challenges in grasping concepts across subjects; making slow progress with tailored support and consistent routines."


  const prompt = 'Create an IEP for a ' + gradeLevel + ' grade student named' + firstName + ' ' + lastName  + ' with ' + learningDisorder + '.' 
                'Keep in these notes in mind while creating the IEP' + 
                'English: ' + english + 
                'Math: ' + math + 
                'Science: ' + science + 
                'History: ' + history + 
                'Art: ' + art + 
                'Other: ' + otherNotes
  

  return {
    resourcePath: `/model/anthropic.claude-3-5-sonnet-20240620-v1:0/invoke`,
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `\n\nHuman:${prompt}\n\nAssistant:`,
              },
            ],
          },
        ],
      },
    },
  };
}

export function response(ctx) {
  return {
    body: ctx.result.body,
  };
}
