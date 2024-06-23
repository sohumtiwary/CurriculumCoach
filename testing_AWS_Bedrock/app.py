import boto3
import json

bedrock_runtime = boto3.client(service_name="bedrock-runtime", region_name="us-east-1")

prompt_data="""
Create an IEP for a third grader with autism for a teacher to use
"""

payload = {
  "modelId": "anthropic.claude-3-5-sonnet-20240620-v1:0",
  "contentType": "application/json",
  "accept": "application/json",
  "body": json.dumps({
    "anthropic_version": "bedrock-2023-05-31",
    "max_tokens": 1000,
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": prompt_data
          }
        ]
      }
    ]
  })
}

response = bedrock_runtime.invoke_model(**payload)

response_body = json.loads(response.get("body").read())
# response_text = response_body.get("completions")[0].get("data").get("text")

# Extract text content
text_content = [item['text'] for item in response_body['content'] if item['type'] == 'text']

# Join the text content into a single string
combined_text = "\n".join(text_content)

print(combined_text)