const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("AucEngine", function () {
    let owner
    let seller
    let buyer
    let auct

    beforeEach(async function() {
        [owner, seller, buyer] = await ethers.getSigners()

        const AucEngine = await ethers.getContractFactory("AucEngine", owner);
        auct = await AucEngine.deploy();    
        await auct.deployed()
    })

    	

    async function getTimestamp(bn) {
        return (
            await ethers.provider.getBlock(bn)
        ).timestamp
        
    }


    describe("createsAuction", function() {
        it("create auction correctly", async function() {
            const duration = 60
            const tx = await auct.createAuction(
                ethers.utils.parseEther("0.0001"),
                3,
                "fake item",
                duration
            )

            const cAuction = await auct.auctions(0)
            expect(cAuction.item).to.eq("fake item")
            console.log(cAuction)

            const ts = await getTimestamp(tx.blockNumber)
            expect(cAuction.endsAt).to.eq(ts + duration)
        })
    })


    describe("buy", function () {
        it("alllows to buy", async function () {
            await auct.connect(seller).createAuction(
                ethers.utils.parseEther("0.0001"),
                100,
                "fake item",
                60
            )


            const buyTx = await auct.connect(buyer)
                .buy(0, {value: ethers.utils.parseEther("0.0001")})
            
            const cAuction = await auct.auctions(0)
            let finalPrice = cAuction.finalPrice
            finalPrice = finalPrice - cAuction.discountRate
            await expect(() => buyTx).
                to.changeEtherBalance(seller, finalPrice - Math.floor((finalPrice * 10) / 100))
        })
    })
})
