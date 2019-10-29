import { expect } from "chai";
import * as vscode from "vscode";
import { getSamplesLocation, read, runBetterSearch } from '../helpers';

suite('Case sensitivity', () => {

	// close active editor after each test

	teardown( async () => {
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor) {
			await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
		}
	});

	test('should be enabled by default', async () => {
		const location = getSamplesLocation('case-sensitivity');
		const expected = read('case-sensitivity/results/expected-enabled.txt');
		const result = await runBetterSearch({ query: 'Foo', location });
		expect(result).to.equal(expected);
	});

	test('should be disabled with \"ignorecase\"', async () => {
		const location = getSamplesLocation('case-sensitivity');
		const expected = read('case-sensitivity/results/expected-disabled.txt');
		const result = await runBetterSearch({ query: 'foo', location, ignorecase: "true" });
		expect(result).to.equal(expected);
	});

	test('should be disabled with \"smartcase\" and lowercase query', async () => {
		const location = getSamplesLocation('case-sensitivity');
		const expected = read('case-sensitivity/results/expected-disabled.txt');
		const result = await runBetterSearch({ query: 'foo', location, smartcase: "true" });
		expect(result).to.equal(expected);
	});

	test('should be enabled with \"smartcase\" and query with uppercased chars', async () => {
		const location = getSamplesLocation('case-sensitivity');
		const expected = read('case-sensitivity/results/expected-enabled.txt');
		const result = await runBetterSearch({ query: 'Foo', location, smartcase: "true" });
		expect(result).to.equal(expected);
	});

	test('should be enabled with \"smartcase\" overriding \"ignorecase\"', async () => {
		const location = getSamplesLocation('case-sensitivity');
		const expected = read('case-sensitivity/results/expected-enabled.txt');
		const result = await runBetterSearch({ query: 'Foo', location, ignorecase: "true", smartcase: "true" });
		expect(result).to.equal(expected);
	});
});