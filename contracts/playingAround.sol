// SPDX-License-Identifier: MIT
pragma solidity ^0.8

contract Voting{
    // setting up the candidates structure
    struct Candidates{
        string name,
        uint256 vote,
    };

    // creating an array that will store the candidates names and votes 
    Candidates[] public candidates;

    // setting up a voters array that will store the addresses of a voter
    address[] public voters;

    // creating a candidate
    function addCandidate(string memory _name) public {
        candidates.push(_name);
    };

    // The actual voting function
    function vote(address _address, uint256 index) public {
        voters.push(_address);
        candidates[index].vote++;
    }

}