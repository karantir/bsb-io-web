import websocket
 
if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.create_connection("ws://localhost:8080/")
    print("Sending 'Hello, World'...")
    ws.send("Hello, World")
    print("Sent")
    print("Receiving...")
    result = ws.recv()
    print("Received {}".format(result))
    ws.close()