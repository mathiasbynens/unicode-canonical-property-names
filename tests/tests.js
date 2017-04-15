import test from 'ava';
import canonicalProperties from '../index.js';

test(t => {
	t.true(canonicalProperties.has('ASCII'));
	t.false(canonicalProperties.has('ascii'));
	t.true(canonicalProperties.has('Any'));
	t.false(canonicalProperties.has('any'));
	t.true(canonicalProperties.has('Assigned'));
	t.false(canonicalProperties.has('assigned'));
	t.true(canonicalProperties.has('ID_Start'));
	t.false(canonicalProperties.has('IDS'));
	t.true(canonicalProperties.has('Emoji_Modifier'));
	t.false(canonicalProperties.has('emojimodifier'));
	t.true(canonicalProperties.has('Emoji_Component'));
	t.false(canonicalProperties.has('emojicomponent'));
});
