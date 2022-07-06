contract ERC20 {  
	event Transfer(address indexed from, address indexed to, uint256 value);    
	event Approval(address indexed owner, address indexed spender, uint256 value);  
	function totalSupply() public view returns(uint256);  
	function balanceOf(address who) public view returns(uint256);  
	function transfer(address to, uint256 value) public returns(bool);  
	function allowance(address owner, address spender)    public view returns (uint256);  
	function transferFrom(address from, address to, uint256 value)    public returns (bool);  
	function approve(address spender, uint256 value)    public returns (bool);
}


contract ERC721 {  
	event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);  
	event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);  
	function balanceOf(address _owner)     public view returns (uint256 _balance);  
	function ownerOf(uint256 _tokenId)    public view returns (address _owner);    
	function transfer(address _to, uint256 _tokenId) public;  
	function approve(address _to, uint256 _tokenId) public;    
	function takeOwnership(uint256 _tokenId) public;
}
