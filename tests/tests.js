import test from 'ava';
import canonicalProperties from '../index.js';

test(t => {
	t.true(canonicalProperties.has('ASCII'));
	t.false(canonicalProperties.has('ascii'));
	t.true(canonicalProperties.has('Any'));
	t.false(canonicalProperties.has('any'));
	t.true(canonicalProperties.has('Assigned'));
	t.false(canonicalProperties.has('assigned'));
	t.true(canonicalProperties.has('Block'));
	t.false(canonicalProperties.has('blk'));
	t.true(canonicalProperties.has('ISO_Comment'));
	t.false(canonicalProperties.has('isc'));
	t.true(canonicalProperties.has('Emoji_Modifier'));
	t.false(canonicalProperties.has('emojimodifier'));
});
