function DoS_DDoS() {
    return(
        <div className="DoS_DDoS">
            <h1>What is DoS and DDoS</h1>
            <h2>Denial of Service (DoS)</h2>
            <p>A Denial of Service attack is a cyber attack aimed at making a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet. This is typically accomplished by overwhelming the target with a flood of requests in an effort to overload systems and prevent some or all legitimate requests from being fulfilled.</p>
            <h2>Distributed Denial of Service (DDoS)</h2>
            <p>A Distributed Denial of Service attack is similar to a DoS attack, but it is launched from a large number of Internet-connected devices, often distributed globally in what is referred to as a botnet. This makes it much more difficult to stop the attack because it involves multiple machines acting as sources of attack traffic. DDoS attacks can be more severe due to the volume of traffic that can be generated compared to a single-source DoS attack.</p>
            <h2>Examples for DoS Attacks</h2>
            <h3>Examples of DoS (Denial of Service) attacks can vary widely, depending on the methods used to overwhelm the target system or network. Here are several common types of DoS attacks:</h3>
            <div className="buffer">
            <img src="src/assets/image_1.webp" alt="" />
            <p>1. Buffer Overflow Attacks: This type of attack involves sending more data to a network application than it is designed to handle. The excess data can cause the application or the entire system to crash, denying service to legitimate users.</p>
            </div>
            <p>2. ICMP Flood: Often referred to as a "Ping flood," this involves attackers overwhelming the victim's network by sending ping requests (ICMP Echo Request messages) at a very fast rate, without waiting for replies. This consumes both outgoing and incoming bandwidth, thereby crippling the victim’s network.</p>
            <div className="ICMP"></div>
            <p>3. SYN Flood: In this attack, the attacker sends a succession of SYN requests to a target's system in an attempt to consume enough server resources to make the system unresponsive to legitimate traffic. This is achieved by not responding to the server's SYN-ACK response, causing the server to wait for acknowledgments for each of the connections initiated by the attacker, thus depleting server resources.</p>
            <p>4. HTTP Flood: This type of DoS attack involves the attacker exploiting seemingly legitimate HTTP GET or POST requests to attack a web server or application. HTTP flood attacks do not use malformed packets, spoofing or reflection techniques, and require less bandwidth than other attacks to bring down the targeted site or server.</p>
            <p>5. Teardrop Attack: This attack involves sending fragmented packets to the targeted device. A bug in the TCP/IP protocol prevents the server from reassembling such packets, causing the packets to overlap. The targeted device crashes or reboots repeatedly as it tries to handle the malformed packets.</p>
            <p>6. Smurf Attack: This is a network layer attack that uses the IP broadcast addressing to send a large number of ICMP packets with the victim's spoofed IP address to various hosts. The volume of replies can overwhelm the victim's system.</p>
        </div>
    )
}
export default DoS_DDoS