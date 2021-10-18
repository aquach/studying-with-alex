import { expect } from 'chai'
import { run, numRepeatedWords } from './app'
import {FilesystemInterface} from './filesystem-interface'

describe('numRepeatedWords', () => {
    it('should return the correct result', () => {
        expect(numRepeatedWords('')).to.be.eq(0)
        expect(numRepeatedWords('a a')).to.be.eq(1)
        expect(numRepeatedWords('a b')).to.be.eq(0)
        expect(numRepeatedWords('hello bye hello bye')).to.be.eq(2)
        expect(numRepeatedWords('hello bye hello bye test')).to.be.eq(2)
    })
})

describe('app', () => {
    it('should make the proper read and write calls', () => {
        let readFileCallCount = 0
        let writeFileCallCount = 0

        const fakeFilesystemModule: FilesystemInterface = {
            readFile(filename) {
                readFileCallCount++
                expect(filename).to.be.eq("myinputfilename")
                return "contents here here"
            },

            writeFile(filename, contents) {
                writeFileCallCount++
                expect(filename).to.be.eq("myoutputfilename")
                expect(contents).to.be.eq("1")
            }
        }

        run(
            fakeFilesystemModule,
            "myinputfilename",
            "myoutputfilename"
        )

        expect(readFileCallCount).to.be.eq(1)
        expect(writeFileCallCount).to.be.eq(1)
    })
})
