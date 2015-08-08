import sys
import threading
import SocketServer


class ThreadedTCPRequestHandler(SocketServer.BaseRequestHandler):

    def handle(self):
        # self.request is the TCP socket connected to the client
        self.data = self.request.recv(1024).strip()
        thread = threading.currentThread()

        print "{0} {1} wrote: {2}".format(
            self.client_address[0],
            thread.name,
            self.data)

        # just send back the same data, but upper-cased
        self.request.sendall(self.data.upper())


class ThreadedTCPServer(SocketServer.ThreadingMixIn, SocketServer.TCPServer):
    pass


if __name__ == "__main__":

    # Port 0 means to select an arbitrary unused port
    # Host "" means accepting connections from anywhere
    HOST, PORT = "", 9494

    try:
        server = ThreadedTCPServer((HOST, PORT), ThreadedTCPRequestHandler)
        print "Listening on {0}:{1}\nPress Ctrl-C to exit\n".format(*server.server_address)
        server.serve_forever()

    except KeyboardInterrupt:
        print "\nBye"
        server.shutdown()
        sys.exit()
